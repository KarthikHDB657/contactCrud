import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField,Grid } from '@material-ui/core';

//Edit Dialog function
const EditDialog = ({ contact, onUpdate, onCancel, open }) => {
  const [editedContact, setEditedContact] = useState(contact);
  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedContact((prevContact) => ({ ...prevContact, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  const handleSubmit = () => {
    const validationErrors = validateFields();
    if (Object.keys(validationErrors).length === 0) {
      onUpdate(editedContact);
    } else {
      setErrors(validationErrors);
    }
  };

  const handleCancel = () => {
    onCancel();
  };

  const validateFields = () => {
    const errors = {};

    if (!editedContact.firstName) {
      errors.firstName = 'First Name is required';
    } else if(!isValidName(editedContact.firstName)){
        errors.firstName = 'Invalid first Name format';
    }

    if (!editedContact.lastName) {
      errors.lastName = 'Last Name is required';
    } else if(!isValidName(editedContact.lastName)){
        errors.lastName = 'Invalid last Name format';
    }

    if (!editedContact.email) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(editedContact.email)) {
      errors.email = 'Invalid email format';
    }

    if (!editedContact.phone) {
      errors.phone = 'Phone Number is required';
    } else if (!isValidPhoneNumber(editedContact.phone)) {
      errors.phone = 'Invalid phone number format';
    }

    return errors;
  };

  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
    
  };

  const isValidPhoneNumber = (phone) => {
    const regex = /^\d+$/;
    return regex.test(phone);
  };

  const isValidName = (name) => {
    const regex = /^[a-zA-Z]+$/;
    return regex.test(name);
  };

  return (
    <Dialog open={open} onClose={handleCancel} >
      <DialogTitle>Edit Contact</DialogTitle>
      <DialogContent>
      <form>
      <Grid container spacing={2}>
       <Grid item xs={12} sm={6}>
        <TextField
          label="First Name"
          name="firstName"
          value={editedContact.firstName}
          onChange={handleInputChange}
          fullWidth
          required
          error={!!errors.firstName}
          helperText={errors.firstName}
         />
       </Grid>
       <Grid item xs={12} sm={6}>
        <TextField
          label="Last Name"
          name="lastName"
          value={editedContact.lastName}
          onChange={handleInputChange}
          fullWidth
          required
          error={!!errors.lastName}
          helperText={errors.lastName}
        />
        </Grid>
        <Grid item xs={12}>
        <TextField
          label="Email"
          name="email"
          type="email"
          value={editedContact.email}
          onChange={handleInputChange}
          fullWidth
          required
          error={!!errors.email}
          helperText={errors.email}
        />
        </Grid>
        <Grid item xs={12}>
        <TextField
          label="Phone Number"
          name="phone"
          value={editedContact.phone}
          onChange={handleInputChange}
          fullWidth
          required
          error={!!errors.phone}
          helperText={errors.phone}
        />
      </Grid>
    </Grid>
   </form>
</DialogContent>
<DialogActions>
  <Button onClick={handleCancel} variant ="contained" color="error">
        Cancel
  </Button>
  <Button onClick={handleSubmit} variant = "contained" color="primary">
          Save
  </Button>
</DialogActions>
</Dialog>
    
  );
};

export default EditDialog;
