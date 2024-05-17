/* eslint-disable arrow-body-style */

import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from '@/router/routes';
import GlobalStyle from '@/styles/globalStyle';
import '@shoelace-style/shoelace/dist/themes/light.css';
import Loading from './pages/Loading';

setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.15.0/cdn/');

const router = createBrowserRouter(routes);

const StyledAppContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--color-white);
  position: relative;
`;

const App = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <GlobalStyle />
      <StyledAppContainer>{isLoading ? <Loading /> : <RouterProvider router={router} />}</StyledAppContainer>
    </>
  );
};

export default App;
