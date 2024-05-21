import { Home, Login, NotFound, SignUp, QNA, PasswordReset } from '@/pages';
import { PATH } from '@/lib/constants/path';
import WasteCategoryItems from '@/components/WasteCategoryItems';
import MyPage from '@/components/MyPage/MyPage';
import DetailItems from '@/components/DetailItems';
import { Topic } from '@/pages/Topic';

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
    path: PATH.PASSWORDRESET,
    element: <PasswordReset />,
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
  {
    path: 'topic',
    element: <Topic />,
  },
  {
    path: 'mypage',
    element: <MyPage />,
  },
];
