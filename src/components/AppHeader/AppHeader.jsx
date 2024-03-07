import { useDispatch, useSelector } from 'react-redux';
import AuthNav from './AuthNav';
import { selectIsLogin, selectUserData } from '../../redux/auth/selectors';
import { UserMenu } from './UserMenu';
import {Header,
  Logo,
  StyledLink,
  Nav,
  BtnLogout,
  WraperProfile,
} from './AppHeader.styled';
import { fetchlogOut } from '../../redux/auth/operations';

export default function AppHeader() {
  const userData = useSelector(selectUserData);
  const isLogin = useSelector(selectIsLogin);
  const dispatch = useDispatch();
  return (
    <Header>
      <Logo>Logo</Logo>
      <Nav>
        {isLogin ? <UserMenu /> : <AuthNav />}
      </Nav>
      {isLogin ? (
        <WraperProfile>
          <p>{userData.name}</p>
          <BtnLogout onClick={() => dispatch(fetchlogOut())}>Logout</BtnLogout>
        </WraperProfile>
      ) : null}
    </Header>
  );
}
