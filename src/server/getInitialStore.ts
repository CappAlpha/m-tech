import { GetServerSidePropsContext } from 'next';
import { END } from 'redux-saga';

import { AppStore, createStore } from '@/store/store';

export const getInitialStore = async (
  ctx: GetServerSidePropsContext,
  addDispatch?: (store: AppStore) => void
) => {
  const { store, runSaga } = createStore({ headers: ctx.req.headers });
  // store.dispatch(headerActions.getMeSaga({ cookie: ctx.req.headers.cookie }));

  if (addDispatch) {
    await addDispatch(store);
  }

  store.dispatch(END);
  await runSaga.toPromise();

  return store.getState();
};
