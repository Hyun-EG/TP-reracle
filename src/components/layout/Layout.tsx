import { styled } from 'styled-components';
import Header from '@/components/Header';
import Nav from '@/components/Nav/Nav';
import { layoutProps } from '@/lib/types/layoutProps';

export const Layout = ({ children }: layoutProps) => {
  return (
      <Header />
      {children}
<Nav />
  );
};
