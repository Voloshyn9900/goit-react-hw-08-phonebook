import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import AuthNav from './AuthNav';
import { selectIsLogin, selectUserData } from '../../redux/auth/selectors';
import { UserMenu } from './UserMenu';
import { StyledLink, Nav, BtnLogout, WraperProfile } from './AppHeader.styled';
import { fetchlogOut } from '../../redux/auth/operations';
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
  const userData = useSelector(selectUserData);
  const isLogin = useSelector(selectIsLogin);
  const dispatch = useDispatch();
  return (
    <>
      <header style={styles.header}>
        <Nav>
          <StyledLink to="/">Home</StyledLink>
          {isLogin ? <UserMenu /> : <AuthNav />}
        </Nav>
        {isLogin ? (
          <WraperProfile>
            <p>{userData.name}</p>
            <BtnLogout onClick={() => dispatch(fetchlogOut())}>
              Logout
            </BtnLogout>
          </WraperProfile>
        ) : null}
      </header>
      <Outlet />
      <footer></footer>
    </>
  );
}
