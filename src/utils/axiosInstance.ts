import axios from "axios";
import Cookies from "js-cookie";

const BACKEND_BASE_URL = "http://localhost:5000";

const getCustomTokens = () => {
  const accessToken = Cookies.get("accessToken");
  const refreshToken = Cookies.get("refreshToken");
  return { accessToken, refreshToken };
};

const setCustomTokens = (accessToken: string, refreshToken: string) => {
  Cookies.set("accessToken", accessToken, { secure: true, sameSite: "Strict" });
  Cookies.set("refreshToken", refreshToken, {
    secure: true,
    sameSite: "Strict",
  });
};

const clearCustomTokens = () => {
  Cookies.remove("accessToken");
  Cookies.remove("refreshToken");
};

const axiosInstance = axios.create({
  baseURL: BACKEND_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const { accessToken } = getCustomTokens();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const { refreshToken } = getCustomTokens();

        if (refreshToken) {
          const refreshResponse = await axios.post(
            `${BACKEND_BASE_URL}/api/auth/refresh-token`,
            { refreshToken }
          );

          const { accessToken, refreshToken: newRefreshToken } =
            refreshResponse.data;

          // Update cookies with new tokens
          setCustomTokens(accessToken, newRefreshToken);

          // Retry original request with new token
          originalRequest.headers.Authorization = `Bearer ${accessToken}`;
          return axiosInstance(originalRequest);
        } else {
          clearCustomTokens();
        }
      } catch (refreshError) {
        clearCustomTokens();
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
