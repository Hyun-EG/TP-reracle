import Header from '@/components/Header';
import Nav from '@/components/Nav/Nav';
import { LayoutProps } from '@/lib/types/layoutProps';

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <Nav />
    </>
  );
};
