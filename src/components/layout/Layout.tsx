import Header from '@/components/Header';
import Nav from '@/components/Nav/Nav';
import { LayoutProps } from '@/lib/types/LayoutProps';

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <Nav />
    </>
  );
};
