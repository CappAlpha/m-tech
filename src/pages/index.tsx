import type { GetServerSideProps, NextPage } from 'next';

//import { strapi } from '@/api/strapi;
import { IndexPage } from '@/app/feature/IndexPage';
import { News } from '@/entities/news';
import { Page } from '@/entities/page';

export interface PageProps {
  pageData: Page;
  news: News[];
}

const Home: NextPage<PageProps> = ({ pageData }) => {
  return <IndexPage
  //pageData={pageData} 
  //news={news}
  />;
};

export const getServerSideProps: GetServerSideProps = async () => {
  // const page = await strapi<{ data: { attributes: Page } }>('/page?populate=deep');
  // const news = await strapi<{ data: News[] }>('/news-list-all?populate=deep&sort[0]=createdAt');
  return {
    props: {
      //pageData: page?.data?.attributes,
      //news: news?.data?,
    },
  };
};

export default Home;
