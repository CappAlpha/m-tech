import type { GetServerSideProps, NextPage } from 'next';

import { IndexPage } from '@/app/feature/IndexPage';

// import { getInitialStore } from '../server/getInitialStore';

const Home: NextPage = (props) => {
  return <IndexPage />;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // const initialStore = await getInitialStore(ctx);

  return {
    props: {
      // initialStore,
    },
  };
};

export default Home;
