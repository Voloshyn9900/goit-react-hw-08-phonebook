import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import AuthNav from './AuthNav';
import { selectIsLogin, selectUserData } from '../../redux/auth/selectors';
import { UserMenu } from './UserMenu';
import { StyledLink, Nav, BtnLogout, WraperProfile } from './AppHeader.styled';
import { fetchlogOut } from '../../redux/auth/operations';
import backgroundImage from '../../images/background.jpg';

const styles = {
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    padding: '20px 100px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 99,
  },
  divMain: {
    display: 'flex',
    justifyContent: 'center', // Исправлено: была ошибка в написании свойства
    alignItems: 'center',
    minHeight: '100vh', // Исправлено: была ошибка в написании свойства
    background: `url(${backgroundImage}) no-repeat`, // Используйте шаблонные строки для вставки переменных
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
};

export default function AppHeader() {
  const userData = useSelector(selectUserData);
  const isLogin = useSelector(selectIsLogin);
  const dispatch = useDispatch();
  return (
    <div style={styles.divMain}>
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
    </div>
  );
}
