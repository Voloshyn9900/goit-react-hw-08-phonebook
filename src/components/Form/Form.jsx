import { useState } from 'react';
import {  Label, BtnSubmit, FormWrapper, Input, SpanIcon, InputBox } from './Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { FaUser } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';


export const Form = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.account.contacts.items);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  function handlSubmit(event) {
    event.preventDefault();

    const contactExists = contacts.some(
      contact => contact.name === name || contact.number === number
    );
  
    if (contactExists) {
      alert('This contact already exists');
      return;
    }

    dispatch(addContact({ name, number }));

    setName('');
    setNumber('');
  }

  return (
    <FormWrapper>
      <form onSubmit={handlSubmit}>
        <InputBox>
          <SpanIcon>
            <ion-icon name="person"><FaUser /></ion-icon>
          </SpanIcon>
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            value={name}
            onChange={e => setName(e.target.value)}
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <Label $filled={name.length > 0}>Name</Label>
        </InputBox>
        <InputBox>
          <SpanIcon>
            <ion-icon name="person"><FaPhone/></ion-icon>
          </SpanIcon>
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            value={number}
            onChange={e => setNumber(e.target.value)}
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <Label $filled={number.length > 0}>Number</Label>
        </InputBox>
        <BtnSubmit type="submit">Add contact</BtnSubmit>
      </form>
    </FormWrapper>
  );
};
