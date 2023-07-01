import React, { useState, useContext } from 'react';
import { ContactContext } from '../Context/ContactContext';
import { TextField, Button, Box, Paper,Container } from '@material-ui/core';

const EditContactForm = ({ contact, onClose }) => {
  const { updateContact } = useContext(ContactContext);
  const [firstName, setFirstName] = useState(contact.firstName);
  const [lastName, setLastName] = useState(contact.lastName);
  const [email, setEmail] = useState(contact.email);
  const [phone, setPhone] = useState(contact.phone);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedContact = {
      id: contact.id,
      firstName,
      lastName,
      email,
      phone,
    };

    updateContact(updatedContact);
    onClose();
  };

  return (
    <div>
      <h2>Edit Contact</h2>
      <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: '16px' }}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="First Name"
          variant="outlined"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Last Name"
          variant="outlined"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Phone Number"
          variant="outlined"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Box marginTop={2} display="flex" justifyContent="center">
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
          <Box marginLeft={1}>
           <Button type="button" variant="contained" color="secondary" onClick={onClose}>
             Cancel
            </Button>
          </Box>
        </Box>
      </form>
      </Paper>
     </Container>
    </div>
  );
};

export default EditContactForm;
