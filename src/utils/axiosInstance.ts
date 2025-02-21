import axios from "axios";
import { getSession } from "next-auth/react";

const axiosInstance = axios.create({
  baseURL: process.env.API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const session = await getSession();

    // Attach access token
    if (session?.accessToken) {
      config.headers.Authorization = `Bearer ${session.accessToken}`;
    }

    // Attach refresh token (if available)
    if (session?.refreshToken) {
      config.headers["Refresh-Token"] = session.refreshToken;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
