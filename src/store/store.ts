import { PayloadAction, configureStore } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import createSagaMiddleware, { Task } from 'redux-saga';

import { isBrowser } from '../server/isBrowser';
import { rootReducer } from './reducer';
import { rootSaga } from './saga';

export const getMiddleaware =
  ({ headers, sagaMiddleware }: any) =>
  (getDefaultMiddlewares: any) =>
    getDefaultMiddlewares({
      serializableCheck: {
        ignoredActionPaths: ['payload.onSuccess', 'payload.onError', 'payload.callback.onSuccess'],
      },
      thunk: {
        extraArgument: {
          headers,
        },
      },
    }).concat(sagaMiddleware);

export const createStore = ({ preloadedState = {}, headers = {} }) => {
  const sagaMiddleware = createSagaMiddleware({
    context: {
      headers,
    },
  });

  const store = configureStore({
    reducer: rootReducer,
    preloadedState,
    devTools: true,
    middleware: getMiddleaware({ sagaMiddleware, headers }), //TODO check
  });

  const runSaga: Task = sagaMiddleware.run(rootSaga);
  return { store, runSaga };
};

type CreateStore = ReturnType<typeof createStore>;
export type AppStore = CreateStore['store'];
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
export interface ThunkExtra {
  hreaders: any;
}

export type PayloadCallbacks<D = any, E = Error> = {
  callback?: {
    onSuccess?: (response?: D) => void;
    onError?: (error?: E) => void;
  };
};

export type PayloadActionWithCallbacks<T, D = any, E = Error> = PayloadAction<
  T & PayloadCallbacks<D, E>
>;

//initStore with SSR specific
let browserStore: AppStore | undefined;
export const initStore = (preloadedState?: RootState) => {
  if (isBrowser) {
    const browserState: any = browserStore?.getState() || {};

    if (preloadedState) {
      Object.keys(preloadedState).forEach((key) => {
        const domainKey = key as keyof RootState;
        browserState[domainKey] = {
          ...browserState[domainKey],
          ...preloadedState[domainKey],
        };
      });
    }

    const { store } = createStore({ preloadedState: browserState });
    browserStore = store;
    return store;
  }
  return createStore({ preloadedState }).store;
};

export function useInitStore(initialState: RootState) {
  const store = useMemo(() => initStore(initialState), [initialState]);

  return store;
}

export const useAppSelector = <R = RootState, S = unknown>(
  selector: (state: R) => S,
  equalityFn?: (left: S, right: S) => boolean
) => useSelector<R, S>(selector, equalityFn);

export const useAppDispatch = () => useDispatch<AppDispatch>();
