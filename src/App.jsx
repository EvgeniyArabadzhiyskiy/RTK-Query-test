import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Section from 'components/Section/Section';
import Container from 'components/Container/Container';
import PhoneForm from 'components/PhoneForm/PhoneForm';
import ContactList from 'components/ContactList/ContactList';
import FilterContacts from 'components/FilterContacts/FilterContacts';
import { useGetAllContactsQuery } from 'redux/contact-sliceApi';

const App = () => {
  
  const { data: contacts = [] } = useGetAllContactsQuery();

  const [filter, setFilter] = useState('');

  const changeInput = evt => {
    setFilter(evt.target.value);
  };

  return (
    <div>
      <Container>
        <Section title="Phonebook">
          <PhoneForm />
        </Section>

        <Section title="Find contacts by name">
          <FilterContacts value={filter} onChangeInput={changeInput} />
        </Section>

        <Section title="Contacts">
          {contacts.length > 0 && <ContactList filter={filter} />}
        </Section>
      </Container>
      <ToastContainer autoClose={3000} theme="colored" pauseOnHover />
    </div>
  );
};

export default App;
