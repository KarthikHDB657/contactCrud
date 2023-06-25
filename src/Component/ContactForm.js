import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';


const ContactForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});

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

    // Validate form fields
    const errors = {};
    if (!firstName.trim()) {
      errors.firstName = 'First Name is required';
    }else if (!validateName(firstName)) {
        errors.firstName = 'Invalid first name format';
    }
    if (!lastName.trim()) {
      errors.lastName = 'Last Name is required';
    }else if (!validateName(lastName)) {
        errors.lastName = 'Invalid last name format';
    }
    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      errors.email = 'Invalid email format';
    }
    if (!phone.trim()) {
      errors.phone = 'Phone Number is required';
    } else if (!validatePhone(phone)) {
      errors.phone = 'Invalid phone number format';
    }
    setErrors(errors)
    if (Object.keys(errors).length === 0) {
      console.log("FOrm Submitted")
    }

    // Submit the form
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Phone Number:', phone);

    // Reset the form fields
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setErrors({});
  };

  return (
   
    <Container maxWidth="sm" spacing ={2} justifyContent = "center">
      <h1 justifyContent = 'center'> Contact Form </h1>
      <form  margin ="dense"  onSubmit={handleSubmit}>
       <Grid container spacing={2}>
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
        <Grid item xs={12} sm={6} onSubmit ={handleSubmit}>
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
            helperText = {errors.email || ' '}
            
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
            helperText = {errors.phone}
         />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </Grid>
     </form>
    </Container>

);

};

export default ContactForm;
