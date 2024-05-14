import { Home, Login, NotFound, SignUp, UserProfile } from '@/pages';
import { PATH } from '@/lib/constants/path';
import { Electronics, Clothes } from '@/components/detailItems';
import Refrigerator from '@/components/DisposalGuide/Refrigerator';

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
    path: 'clothes',
    element: <Clothes />,
  },
  {
    path: 'electronics/refrigerator',
    element: <Refrigerator />,
  },
];
