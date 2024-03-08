import React from 'react';
import { Form } from '../components/Form/Form';
import { ContactList } from '../components/ContactList/ContactList';
import { Filter } from '../components/Filter/Filter';
import { Wrapper, WrapperInput } from './ContactsPage.styled';

export default function ContactsPage() {
  return (
    <>
      <Wrapper>
        <WrapperInput>
          <Form />
        </WrapperInput>
          <Filter />
          <ContactList />
      </Wrapper>
      
    </>
  );
}
