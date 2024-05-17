import { styled } from 'styled-components';
import Header from '@/components/Header';
import Nav from '@/components/Nav/Nav';
import { LayoutProps } from '@/lib/types/LayoutProps';

const LayoutWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  // justify-content: space-between;
`;

export const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutWrapper>
      <Header />
      {children}
      <Nav />
    </LayoutWrapper>
  );
};
