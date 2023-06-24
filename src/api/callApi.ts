import { AxiosRequestConfig } from 'axios';
import { call, getContext } from 'typed-redux-saga/macro';

type ApiFn = (...args: any[]) => any;

export function* callApi<Fn extends ApiFn>(fn: Fn, ...args: Parameters<Fn>) {
  // @ts-ignore
  const headers: any = yield* getContext('headers');
  const config = args[0] as AxiosRequestConfig;
  const mergeHeader = { ...headers, ...config?.headers };
  const mergeConfig = { ...config, headers: mergeHeader } as AxiosRequestConfig;
  const typedArgs = [mergeConfig] as unknown as Parameters<Fn>;
  // @ts-ignore
  const response = yield* call<Fn>(fn, ...typedArgs);
  return response;
}
