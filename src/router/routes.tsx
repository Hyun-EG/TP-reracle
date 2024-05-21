import { Home, Login, NotFound, SignUp, QNA } from '@/pages';
import { PATH } from '@/lib/constants/path';
import { Electronics, Clothes, Paper } from '@/components/DetailItems';

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
    path: PATH.NOT_FOUND,
    element: <NotFound />,
  },
  {
    path: '/:categoryId',
    element: <WasteCategoryItems />,
  },
  {
    path: '/:categoryId/:itemId',
    element: <DetailItems />,
  },
  {
    path: 'qna',
    element: <QNA />,
  },
];
