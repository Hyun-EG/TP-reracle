import { Home, Login, NotFound, SignUp, UserProfile } from '@/pages';
import { PATH } from '@/lib/constants/path';
import Furniture from '@/pages/product/Furniture';
const routes = [
  {
    path: PATH.HOME,
    element: <Home />,
  },
  {
    path: PATH.LOGIN,
    element: <Login />,
  },
  {
    path: PATH.SIGNUP,
    element: <SignUp />,
  },
  {
    path: PATH.USER_PROFILE,
    element: <UserProfile />,
  },
  {
    path: PATH.NOT_FOUND,
    element: <NotFound />,
  },
  {
    path: '/category/furnitures',
    element: <Furniture />,
  },
];

export default routes;
