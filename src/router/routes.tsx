import { Home, Login, NotFound, SignUp, UserProfile } from '@/pages';
import { PATH } from '@/lib/constants/path';
import { Electronics, Clothes, Paper } from '@/components/detailItems';
import Refrigerator from '@/components/DisposalGuide/Refrigerator';
import Newspaper from '@/components/DisposalGuide/Newspaper';
import RiceBig from '@/components/DisposalGuide/RiceBig';

export const routes = [
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
    path: 'electronics',
    element: <Electronics />,
  },
  {
    path: 'electronics/refrigerator',
    element: <Refrigerator />,
  },
  {
    path: 'clothes',
    element: <Clothes />,
  },

  {
    path: 'paper',
    element: <Paper />,
  },
  {
    path: 'paper/newspaper',
    element: <Newspaper />,
  },
  {
    path: 'paper/ricebag',
    element: <RiceBig />,
  },
];
