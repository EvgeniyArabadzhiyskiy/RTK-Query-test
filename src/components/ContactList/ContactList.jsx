import { useMemo } from 'react';
import {
  useDeleteContactMutation,
  useGetAllContactsQuery,
  useToggleFavoritesMutation,
} from 'redux/contact-sliceApi';

import ContactItem from './ContactItem/ContactItem';
import { Box } from '../Box/Box';

const ContactList = ({ filter }) => {
  const { data: contacts = [] } = useGetAllContactsQuery();
  const [deleteContact] = useDeleteContactMutation();
  const [toggleFaforit] = useToggleFavoritesMutation();

  const filtredContacts = useMemo(() => {
    const normalizeContact = filter.toLowerCase();

    return contacts.filter(({ name }) => {
      return name.toLowerCase().includes(normalizeContact);
    });
  }, [contacts, filter]);

  const onToggleFavorites = ({ id, favorites }) => {
    toggleFaforit({ id, favorites });
  };

  return (
    <Box border="normal" p={4} as="ul">
      {filtredContacts.map(({ id, name, number, favorites }) => {
        return (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
            favorites={favorites}
            onDeleteContact={() => deleteContact(id)}
            onToggle={() => onToggleFavorites({ id, favorites: !favorites })}
          />
        );
      })}
    </Box>
  );
};

export default ContactList;
