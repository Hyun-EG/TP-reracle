/* eslint-disable arrow-body-style */

import styled from 'styled-components';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from '@/router/routes';
import GlobalStyle from '@/styles/globalStyle';
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
  return (
    <>
      <GlobalStyle />
      <StyledAppContainer>
        <RouterProvider router={router} />
      </StyledAppContainer>
    </>
  );
};

export default App;
