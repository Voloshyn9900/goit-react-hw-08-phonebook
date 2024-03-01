import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import AuthNav from './AuthNav';
import Navigation from './Navigation';
import { selectIsLogin } from '../../redux/auth/selectors';
import { UserMenu } from './UserMenu';
// import UserMenu from './UserMenu';
// import AuthNav from './AuthNav';
// import { authSelectors } from '../redux/auth';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #2A363B',
  },
};

export default function AppHeader() {
  const isLoggedIn = useSelector(selectIsLogin);
  return (
    <>
      <header style={styles.header}>
        <Navigation />

        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </header>
      <Outlet />
    </>
  );
}
