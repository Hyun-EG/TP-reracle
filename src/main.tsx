import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App.tsx';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`


body {
  font-family: "Nanum Pen Script";
  background-color: #f6f6f6;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  min-height: 100vh;
}


#root {
  background-color: #fff;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  margin: 0px;
  padding-left: 20px;
  padding-right: 20px;

  --catories-btn-color: #fef3c1;
  --catories-btn-hover-color: #FCD118;
  
}

:root{

}
`;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
);
