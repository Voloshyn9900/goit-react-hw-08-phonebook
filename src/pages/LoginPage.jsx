import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchLogIn } from '../redux/auth/operations';
import TextField from '@mui/material/TextField';
import { StyleText } from './LoginPage.styled';

const styles = {

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

      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>
          <StyleText
            id="outlined-basic"
            label="Email-Address"
            variant="outlined"
            size="small"
            type="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </label>

        <label style={styles.label}>
          <StyleText
            id="outlined-basic"
            label="Password"
            variant="outlined"
            size="small"
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
