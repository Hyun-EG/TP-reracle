import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import routes from '@/router/routes';
import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  ${reset}
  :root{
    --color-yellow: #FCD118;
    --color-yellow-light: #FEF3C1;
    --color-green: #93FD98;
    --color-green-light: #D8FFDA;
    --color-purple: #9747FF;
    --color-purple-light: #F0E5FF;
    --color-gray-dark: #3F3F46;
    --color-gray-light: #C1C1C1;
    --color-white: #FFFFFF;

    --font-weight-regular: 400;
    --font-weight-medium: 500;
    --font-weight-bold: 700;
  }
  body{
    font-family: "Noto Sans KR", sans-serif;
  }
`;


const router = createBrowserRouter(routes);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <GlobalStyle />
    </>
  );
}

export default App;
