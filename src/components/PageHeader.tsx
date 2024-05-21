import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  width: 56.3vh;
  height: 3.75vh;
  top: 0;
  background-color: var(--color-green);
  font-size: 1.8vh;
  font-weight: var(--font-weight-bold);
  color: var(--color-purple);
  display: flex;
  justify-content: center;
  align-items: center;
`;
interface PageHeaderProps {
  title: string;
}

const PageHeader = ({ title }: PageHeaderProps) => {
  return <Header>{title}</Header>;
};

export default PageHeader;
