import { useState, useCallback } from 'react';
import axiosInstance from '../utils/axiosInstance';
import { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

interface UseApiReturn<T> {
  data: T | null;
  loading: boolean;
  error: AxiosError | null;
  fetchData: (config: AxiosRequestConfig) => Promise<void>;
}

function useApi<T>(): UseApiReturn<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<AxiosError | null>(null);

  const fetchData = useCallback(async (config: AxiosRequestConfig) => {
    setLoading(true);
    setError(null);
    try {
      const response: AxiosResponse<T> = await axiosInstance(config);
      setData(response.data);
    } catch (err) {
      setError(err as AxiosError);
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error, fetchData };
}

export default useApi;