import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchRegister } from '../redux/auth/operations';
import { FaUser, FaLock } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import {
  Wrapper,
  FormWrapper,
  TitleText,
  InputBox,
  BtnRegistration,
  SpanIcon,
  Input,
  Label,
} from './RegisterPage.styled';

export default function RegisterPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(fetchRegister({ name, email, password }));
    console.log({ name, email, password });
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Wrapper>
      {/* autoComplete="off" */}
      <FormWrapper>
        <TitleText>Registration</TitleText>
        <form onSubmit={handleSubmit}>
          <InputBox>
            <SpanIcon>
              <ion-icon name="person">
                <FaUser />
              </ion-icon>
            </SpanIcon>
            <Input
              type="text"
              name="name"
              autoComplete="off"
              value={name}
              onChange={handleChange}
            />
            <Label $filled={name.length > 0}>Username</Label>
          </InputBox>

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
              onChange={handleChange}
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
              onChange={handleChange}
            />
            <Label $filled={password.length > 0}>Password</Label>
          </InputBox>

          <BtnRegistration type="submit">Sign up</BtnRegistration>
        </form>
      </FormWrapper>
    </Wrapper>
  );
}
