import '@/styles/reset.scss';
import '@/styles/global.scss';
import '@/styles/colors.scss';

import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';

import ErrorBoundary from '@/app/ui/ErrorBoundary/ErrorBoundary';
// import { Provider as ReduxProvider } from 'react-redux';
import { RootState, useInitStore } from '@/store/store';

type Props<T> = AppProps<T> & {
  Component: NextPage<T> & {
    getLayout?: (page: React.ReactNode) => React.ReactNode;
  };
};

interface PageProps {
  initialStore: RootState;
}

export default function App({ Component, pageProps }: Props<PageProps>) {
  // const store = useInitStore(pageProps.initialStore);
  return (
    <>
      {/* <ReduxProvider store={store}> */}
      <HeadApp />
      <ErrorBoundary>
        <Component {...pageProps} />
      </ErrorBoundary>
      {/* </ReduxProvider> */}
    </>
  );
}

const HeadApp: React.FC = () => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Заголовок</title>
      {/* <link rel="icon" type="image/x-icon" href="/favicons/favicon.ico" />
      <link rel="icon" href="/favicons/favicon.svg" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
      <link rel="manifest" href="/favicons/site.webmanifest" />
      <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5" /> */}
    </Head>
  );
};
