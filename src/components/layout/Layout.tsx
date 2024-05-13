import Header from '@/components/Header';
import Nav from '@/components/Nav/Nav';

export const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      {children}
      <Nav />
    </>
  );
};
