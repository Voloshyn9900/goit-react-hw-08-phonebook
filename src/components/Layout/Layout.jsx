
import { Outlet } from 'react-router-dom';
import AppHeader from 'components/AppHeader/AppHeader';
import { Body } from './Layout.styled';


export default function Layout() {
  return (
    <Body>
      <AppHeader />
      <Outlet />
      <footer></footer>
    </Body>
  );
}
