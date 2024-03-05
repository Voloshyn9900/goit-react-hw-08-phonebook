import { useSelector } from 'react-redux';
import { selectIsLogin } from '../../redux/auth/selectors';
import { Navigate } from 'react-router-dom';

export const RedirectRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLogin = useSelector(selectIsLogin);

  //////////////////////////////
  return isLogin ? <Navigate to={redirectTo} /> : Component;
};
