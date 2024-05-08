import { Layout } from '@/components/layout/Layout';
import Nav from '@/components/Nav/Nav'
import Header from '@/components/Header/Header'
// import { Category } from '@/components/Category';

export const Home = () => {
  return (
    <>  
      <Layout>
        <Header />
        {/* <Category /> */}
        <Nav />             
      </Layout>
    </>
  );
};