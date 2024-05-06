import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from '@/router/routes';

const router = createBrowserRouter(routes);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
