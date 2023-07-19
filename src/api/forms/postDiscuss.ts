import { apiClient } from '../api';

interface Data {
  succes: boolean;
}

export const call = async (params: FormData) =>
  apiClient<Data, { message: string }>({
    method: 'POST',
    url: '/discuss',
    data: params,
    headers: { 'Content-Type': 'multipart/form-data' },
  });