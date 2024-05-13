import { Layout } from '@/components/layout/Layout';
import Nav from '@/components/Nav/Nav';
import Header from '@/components/Header';
import CategoryHY from '@/components/CategoryHY/CategoryHY';
import SubCategoryHY from '@/components/CategoryHY/SubCategoryHY';
import DetailPageHY from '@/components/CategoryHY/DetailPageHY';
import { Category } from '@/components/Category';

export const Home = () => {
  return (
    <>
      <Layout>
        <Header />
        {/* <CategoryHY /> */}
        {/* <SubCategoryHY /> */}
        {/* <DetailPageHY /> */}
        <Category />
        <Nav />
      </Layout>
    </>
  );
};
