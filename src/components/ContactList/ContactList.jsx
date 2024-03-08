import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from '../../redux/contacts/operations';
import { selectVisiblContacts } from '../../redux/contacts/selectors';
import {
  ListWrapper,
  ListContainer,
  ListItem,
  ItemText,
  BtnDel,
} from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectVisiblContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ListWrapper>
      <ListContainer>
        {contacts
          .slice()
          .reverse()
          .map(contact => (
            <ListItem key={contact.id}>
              <ItemText>
                {contact.name}: {contact.number}
              </ItemText>
              <BtnDel onClick={() => dispatch(deleteContact(contact.id))}>
                Delete
              </BtnDel>
            </ListItem>
          ))}
      </ListContainer>
    </ListWrapper>
  );
};
