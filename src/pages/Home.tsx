import { Layout } from '@/components/layout/Layout';
import { Category } from '@/components/Category';
import MyPage from '@/components/MyPage/MyPage';

export const Home = () => {
  return (
    <>
      <Layout>
        {/* <Category /> */}
        <MyPage />
      </Layout>
    </>
  );
};
