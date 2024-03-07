import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchLogIn } from '../redux/auth/operations';
import { FaLock } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import {
  Wrapper,
  FormWrapper,
  TitleText,
  InputBox,
  SpanIcon,
  Input,
  Label,
  BtnLogin,
} from './LoginPage.styled';


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
    <Wrapper>
      {/* autoComplete="off" */}
      <FormWrapper>
        <TitleText>Login</TitleText>
        <form onSubmit={handleSubmit}>
          <InputBox>
            <SpanIcon>
              <ion-icon name="person">
                <MdEmail />
              </ion-icon>
            </SpanIcon>
            <Input
              type="email"
              name="email"
              autoComplete="off"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <Label $filled={email.length > 0}>Email</Label>
          </InputBox>

          <InputBox>
            <SpanIcon>
              <ion-icon name="person">
                <FaLock />
              </ion-icon>
            </SpanIcon>
            <Input
              type="password"
              name="password"
              autoComplete="off"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <Label $filled={password.length > 0}>Password</Label>
          </InputBox>

          <BtnLogin type="submit">Sign in</BtnLogin>
        </form>
      </FormWrapper>
    </Wrapper>
  );
}
