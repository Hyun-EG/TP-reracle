import { Home, Login, NotFound, SignUp, UserProfile } from '@/pages';
import { PATH } from '@/lib/constants/path';
import CategoryItems from '@/components/CategoryItems';
import ItemDetails from '@/components/ItemDetails';

export const routes = [
  {
    path: '/',
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
    path: '/:categoryId',
    element: <CategoryItems />,
  },
  {
    path: '/:categoryId/:itemId',
    element: <ItemDetails />,
  },
];
