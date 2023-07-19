import { apiClient } from "../api";

interface Data {
  succes: boolean;
}

interface Params {
  name: string;
  email?: string;
  phone?: string;
}

export const call = async (params: Params) =>
  apiClient<Data, { message: string }>({
    method: 'POST',
    url: '/contact',
    data: params,
  });