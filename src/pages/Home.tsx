import { Layout } from '@/components/layout/Layout';
import { Category } from '@/components/Category';

export const Home = () => {
  return (
    <>
      <Layout>
        <h1>home</h1>
        <h2>검색바</h2>
        <Category />
      </Layout>
    </>
  );
};
