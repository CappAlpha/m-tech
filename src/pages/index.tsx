import type { GetServerSideProps, NextPage } from 'next';

//import { strapi } from '@/api/strapi;
import { IndexPage } from '@/app/feature/IndexPage';
import { Page } from '@/entities/page';

export interface PageProps {
  pageData: Page;
}

const Home: NextPage<PageProps> = ({ pageData }) => {
  return <IndexPage pageData={pageData} />;
};

export const getServerSideProps: GetServerSideProps = async () => {
  // const page = await strapi<{ data: { attributes: Page } }>('/page?populate=deep')
  return {
    props: {
      //pageData: page?.data?.attributes,
    },
  };
};

export default Home;
