import React, { useState, useContext } from 'react';
import { TextField, Button, Grid, Container } from '@material-ui/core';
import { ContactContext } from '../Context/ContactContext';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

const ContactForm = ({ contact, onCancel }) => {
  const { addContact, updateContact } = useContext(ContactContext);
  const [firstName, setFirstName] = useState(contact ? contact.firstName : '');
  const [lastName, setLastName] = useState(contact ? contact.lastName : '');
  const [email, setEmail] = useState(contact ? contact.email : '');
  const [phone, setPhone] = useState(contact ? contact.phone : '');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePhone = (phone) => {
    const regex = /^\d+$/;
    return regex.test(phone);
  };

  const validateName = (name) => {
    const regex = /^[a-zA-Z]+$/;
    return regex.test(name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};
    if (!validateName(firstName)) {
      validationErrors.firstName = 'Invalid first name format';
    }
    if (!validateName(lastName)) {
      validationErrors.lastName = 'Invalid last name format';
    }
    if (!validateEmail(email)) {
      validationErrors.email = 'Invalid email format';
    }
    if (!validatePhone(phone)) {
      validationErrors.phone = 'Invalid phone number format';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const updatedContact = {
      id: contact ? contact.id : uuidv4(),
      firstName,
      lastName,
      email,
      phone,
    };

    if (contact) {
      updateContact(updatedContact);
      navigate('/ContactList');
    } else {
      addContact(updatedContact);
      navigate('/ContactList');
    }
  };

  const handleCancel = () => {
    if (contact) {
      onCancel()
    } else {
      window.location.reload();
    }
  };

  return (
    <Container maxWidth="sm" spacing={2} justifycontent="center">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              fullWidth
              error={!!errors.firstName}
              helperText={errors.firstName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              fullWidth
              error={!!errors.lastName}
              helperText={errors.lastName}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              fullWidth
              error={!!errors.email}
              helperText={errors.email || ' '}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              fullWidth
              error={!!errors.phone}
              helperText={errors.phone}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              {contact ? 'Update' : 'Add'}
            </Button>
            <Button variant="contained" color="secondary" onClick={handleCancel}>
             Cancel
            </Button>

          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default ContactForm;
