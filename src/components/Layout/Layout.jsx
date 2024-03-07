
import { Outlet } from 'react-router-dom';
import backgroundImage from '../../images/background.jpg';
import AppHeader from 'components/AppHeader/AppHeader';

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

export default function Layout() {
  return (
    <div style={styles.divMain}>
      <AppHeader />
      <Outlet />
      <footer></footer>
    </div>
  );
}
