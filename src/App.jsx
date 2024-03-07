import AppHeader from './components/AppHeader/AppHeader';
import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import { fetchRefreshUser } from './redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
import { RedirectRoute } from 'components/Routes/RedirectRoute';
import { selectIsRefreshing } from './redux/auth/selectors';
import { PrivateRoutes } from 'components/Routes/PrivateRouts';
import { PreLoader } from 'components/PreLoader/PreLoader';
import Layout from 'components/Layout/Layout';

// import HomePage from 'pages/HomePage';
// import ContactsPage from 'pages/ContactsPage';
// import RegisterPage from 'pages/RegisterPage';
// import LoginPage from 'pages/LoginPage';

const HomePage = lazy(() => import('pages/HomePage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRefreshUser());
  }, [dispatch]);

  const isRefreshing = useSelector(selectIsRefreshing);

  return isRefreshing ? (
    <b>Refreshing user</b>
  ) : (
    <Suspense
      fallback={
        <div
          style={{
            width: '100vw',
            height: '100vh',
            backgroundColor: '#ffffff',
          }}
        >
          <PreLoader />
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RedirectRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RedirectRoute redirectTo="/contacts" component={<LoginPage />} />
            }
          />

          <Route
            path="/contacts"
            element={
              <PrivateRoutes redirectTo="/login" component={<ContactsPage />} />
            }
          />
        </Route>
      </Routes>
    </Suspense>
  );
};
