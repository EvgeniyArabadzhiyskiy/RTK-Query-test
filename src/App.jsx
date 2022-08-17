import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Section from 'components/Section/Section';
import Container from 'components/Container/Container';
import PhoneForm from 'components/PhoneForm/PhoneForm';
import ContactList from 'components/ContactList/ContactList';
import FilterContacts from 'components/FilterContacts/FilterContacts';
import { useGetAllContactsQuery } from 'redux/contact-sliceApi';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import LoginForm from 'components/LoginForm/LoginForm';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';

const App = () => {
  const [count ,setCount] = useState(0)

  const isLoggedIn = useSelector(authSelectors.getIsLOggedIn);
  console.log("App ~ isLoggedIn", isLoggedIn);
  
  // const { data: contacts = [] } = useGetAllContactsQuery();
  // console.log("App ~ contacts", contacts);

  const [filter, setFilter] = useState('');

  const changeInput = evt => {
    setFilter(evt.target.value);
  };

  return (
    <div>
      
      <Container>
      <RegisterForm />
      <LoginForm />
      <UserMenu />
        <Section title="Phonebook">
          <PhoneForm />
        </Section>

        <Section title="Find contacts by name">
          <FilterContacts value={filter} onChangeInput={changeInput} />
        </Section>
          <h1>{count}</h1>
            <button type='button' onClick={() => setCount(st => st + 1)}>Добавить 1  </button>
        <Section title="Contacts">
           {isLoggedIn && <ContactList filter={filter} />}
        </Section>
      </Container>
      <ToastContainer autoClose={3000} theme="colored" pauseOnHover />
    </div>
  );
};

export default App;
