import Button from 'components/Button/Button';
import { Box } from 'components/Box/Box';
import { UserName, UserNumber } from './ContactItem.styled';

const ContactItem = ({ name, number, favorites, onDeleteContact, onToggle }) => {
  return (
    <div>
      <Box
        mb={3}
        display="flex"
        justifyContent="space-around"
        textAlign="left"
        as="li"
      >
        <input
          type="checkbox"
          checked={favorites}
          onChange={onToggle}
        />
        <UserName>{name}:</UserName>
        <UserNumber>{number}</UserNumber>
        <Button onClick={onDeleteContact}>Delete</Button>
      </Box>
    </div>
  );
};

export default ContactItem;
