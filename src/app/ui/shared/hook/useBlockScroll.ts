import { DependencyList } from 'react';

import { useUpdateEffect } from './useUpdateEffect';

export const useBlockScroll = (deps?: DependencyList) => {
  // eslint-disable-next-line consistent-return
  useUpdateEffect(() => {
    const isNoScroll = deps?.every((elem) => elem);

    if (isNoScroll) {
      document.body.dataset['noScroll'] = 'true';
    } else {
      delete document.body.dataset['noScroll'];
    }
  }, deps);
};
