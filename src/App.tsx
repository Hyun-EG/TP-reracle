import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from '@/router/routes';
import GlobalStyles from '@/styles/GlobalStyles';
import '@shoelace-style/shoelace/dist/themes/light.css';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path';
setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.15.0/cdn/');

const router = createBrowserRouter(routes);

const App = () => {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
