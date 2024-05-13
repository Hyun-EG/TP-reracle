import { Home, Login, NotFound, SignUp, UserProfile } from '@/pages';
import { PATH } from '@/lib/constants/path';
import { Furniture, Bathroom, Electronics, Cosmetics, Household, Books, Clothes } from '@/pages/category';
import Refrigerator from '@/pages/productDetail/Refrigerator';

export const routes = [
  {
    path: PATH.HOME,
    element: <Home />,
  },
  {
    path: 'electronics',
    element: <Electronics />,
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
    path: 'furnitures',
    element: <Furniture />,
  },
  {
    path: 'bathroom',
    element: <Bathroom />,
  },

  {
    path: 'cosmetics',
    element: <Cosmetics />,
  },
  {
    path: 'household',
    element: <Household />,
  },
  {
    path: 'books',
    element: <Books />,
  },
  {
    path: 'clothes',
    element: <Clothes />,
  },
  {
    path: 'electronics/refrigerator',
    element: <Refrigerator />,
  },
];
