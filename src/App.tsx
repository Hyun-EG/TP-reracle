/* eslint-disable arrow-body-style */

import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from '@/router/routes';
import GlobalStyles from '@/styles/GlobalStyles';
import Loading from './pages/Loading';
import '@shoelace-style/shoelace/dist/themes/light.css';

setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.15.0/cdn/');

const router = createBrowserRouter(routes);

const StyledAppContainer = styled.div`
  width: 23.4375rem;
  height: 41.6875rem;
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
      <GlobalStyles />
      <StyledAppContainer>{isLoading ? <Loading /> : <RouterProvider router={router} />}</StyledAppContainer>
    </>
  );
};

export default App;
