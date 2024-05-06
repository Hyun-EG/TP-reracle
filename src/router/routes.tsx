import { Home, Login, NotFound, SignUp, UserProfile } from '@/pages';
import { PATH } from '@/lib/constants/path';
import { Furniture, Bathroom, Electronics, Cosmetics, Household, Books, Clothes } from '@/pages/product';
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
  {
    path: '/category/bathroom',
    element: <Bathroom />,
  },
  {
    path: '/category/electronics',
    element: <Electronics />,
  },
  {
    path: '/category/cosmetics',
    element: <Cosmetics />,
  },
  {
    path: '/category/household',
    element: <Household />,
  },
  {
    path: '/category/books',
    element: <Books />,
  },
  {
    path: '/category/clothes',
    element: <Clothes />,
  },
];

export default routes;
