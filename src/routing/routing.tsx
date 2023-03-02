import { Error } from '@/pages/Error';
import { Main } from '@/pages/Main';
import { News } from '@/pages/News';
import { Profile } from '@/pages/Profile';
import { Root } from '@/pages/Root';
import { ProtectedRoute } from '@/components/hoc/ProtectedRoute';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Root />}>
      <Route path="/" element={<Main />} />
      <Route path="/news" element={<News />} />
      <Route path="/main" element={<Main />} />
      <Route
        path="/profile"
        element={
          <ProtectedRoute redirectPath="/main">
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Error />} />
    </Route>,
  ),
);
