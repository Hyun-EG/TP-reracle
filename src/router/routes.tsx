import { Home, Login, NotFound, SignUp, UserProfile } from '@/pages';
import { PATH } from '@/lib/constants/path';
import { Electronics, Clothes, Paper } from '@/components/detailItems';
import Refrigerator from '@/components/disposalGuide/Refrigerator';
import Newspaper from '@/components/disposalGuide/Newspaper';
import RiceBig from '@/components/disposalGuide/RiceBig';
import { categories } from '@/lib/constants/categories';
import Cate from '@/components/Cate';
import CateItems from '@/components/CateItems';
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
    element: <CateItems />,
  },
  {
    path: '/:categoryId/:itemId',
    element: <ItemDetails />,
  },

  // { path: '/cate', element: <Cate /> },

  // {
  //   path: 'electronics',
  //   element: <Electronics />,
  // },
  // {
  //   path: 'electronics/refrigerator',
  //   element: <Refrigerator />,
  // },
  // {
  //   path: 'clothes',
  //   element: <Clothes />,
  // },

  // {
  //   path: 'paper',
  //   element: <Paper />,
  // },
  // {
  //   path: 'paper/newspaper',
  //   element: <Newspaper />,
  // },
  // {
  //   path: 'paper/ricebag',
  //   element: <RiceBig />,
  // },
];
