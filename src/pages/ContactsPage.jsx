import React from 'react';
import { Section, Container, PhoneBook, Title } from '../App.styled';
import { Form } from '../components/Form/Form';
import { ContactList } from '../components/ContactList/ContactList';
import { Filter } from '../components/Filter/Filter';

export default function ContactsPage() {
  return (
    <Section>
      <Container>
        <PhoneBook>
          <Title>PhoneBook</Title>
          <Form />
          <Title>Contacts</Title>
          <Filter />
          <ContactList />
        </PhoneBook>
      </Container>
    </Section>
  );
}
