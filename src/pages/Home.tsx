import { Layout } from '@/components/layout/Layout';
import { Category } from '@/pages/Category';

export const Home = () => {
  return (
    <>
      <Layout>
        <h1>home</h1>
        <Category />
      </Layout>
    </>
  );
};
