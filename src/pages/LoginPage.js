import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchLogIn } from '../redux/auth/operations';
// import { authOperations } from '../redux/auth';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

export default function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(fetchLogIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Login page</h1>

      <form onSubmit={handleSubmit} style={styles.form} >
        <label style={styles.label}>
          Почта
          <input
            type="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </label>

        <label style={styles.label}>
          Пароль
          <input
            type="password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </label>

        <button type="submit">Войти</button>
      </form>
    </div>
  );
}
