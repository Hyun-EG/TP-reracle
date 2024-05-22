import React from 'react';
import { styled } from 'styled-components';
import { Layout } from '@/components/layout/Layout';

const HeaderQna = styled.div`
  width: 56.3vh;
  height: 3.75vh;
  background: #9747ff;
  text-align: center;
  align-content: center;
  color: white;
  font-size: 2vh;
`;

export const MyQuestion = () => {
  return (
    <Layout>
      <HeaderQna>
        <div>dd</div>
      </HeaderQna>
    </Layout>
  );
};
