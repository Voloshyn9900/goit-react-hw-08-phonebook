import AppHeader from './components/AppHeader/AppHeader';
/////////////////////////////
import { Route, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import ContactsPage from 'pages/ContactsPage';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import { useEffect } from 'react';
import { fetchRefreshUser } from './redux/auth/operations';
import { useDispatch } from 'react-redux';
import { RedirectRoute } from 'components/Routs/RedirectRoute';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRefreshUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<AppHeader />}>
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
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
    </>
  );
};
