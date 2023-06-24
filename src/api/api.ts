import axios, { AxiosRequestConfig, Method } from 'axios';
// import { onRejectResponse } from './interceptors';

const API_HOST = process.env.NEXT_PUBLIC_API_HOST;

const config = {
  baseURL: `${API_HOST}/api`,
  headers: {
    'Cache-Control': 'no-cache',
    Pragma: 'no-cache',
    Expires: 0,
  },
  withCredentials: true,
};

const apiInstance = axios.create(config);

interface ApiRequestConfig extends AxiosRequestConfig {
  url: string;
  method?: Method | string;
}

interface ApiRequestError {
  error: string;
  data: null;
}

interface Success<D> {
  error: null;
  data: D;
}

interface Failed<E> {
  error: E;
  data: null;
}

export type ApiResponse<D, E> = Success<D> | Failed<E>;

const apiClient = <D, E = ApiRequestError>(
  config: ApiRequestConfig
): Promise<ApiResponse<D, E>> => {
  return apiInstance
    .request(config)
    .then((response) => ({ error: null, data: response.data }))
    .catch((error) => {
      if (error?.response?.data?.error) {
        return { error: error?.response?.data?.error, data: null };
      }

      return { error: 'unknown', data: null };
    });
};

apiInstance.interceptors.request.use((config) => {
  return config;
});

export { apiClient };
