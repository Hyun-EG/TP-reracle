import Header from '@/components/Header';
import Nav from '@/components/Nav/Nav';
import { layoutProps } from '@/lib/types/LayoutProps';

export const Layout = ({ children }: layoutProps) => {
  return (
    <>
      <Header />
      {children}
      <Nav />
    </>
  );
};
