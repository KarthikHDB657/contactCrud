import React, { useState, useContext} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import {useNavigate}  from 'react-router-dom';
import { ContactContext } from '../Context/ContactContext';
import { v4 as uuidv4 } from 'uuid';


//Contact form
const ContactForm = () => {
  //use context hook to add the contact
  const { addContact } = useContext(ContactContext);

  //use navigate button for routing
  const history = useNavigate();

  //Setting states using useEffect
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
    const newerrors = {};
    if (!firstName.trim()) {
      newerrors.firstName = 'First Name is required';
    }else if (!validateName(firstName)) {
      newerrors.firstName = 'Invalid first name format';
    }
    if (!lastName.trim()) {
      newerrors.lastName = 'Last Name is required';
    }else if (!validateName(lastName)) {
      newerrors.lastName = 'Invalid last name format';
    }
    if (!email.trim()) {
      newerrors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      newerrors.email = 'Invalid email format';
    }
    if (!phone.trim()) {
      newerrors.phone = 'Phone Number is required';
    } else if (!validatePhone(phone)) {
      newerrors.phone = 'Invalid phone number format';
    }
    
    if (Object.keys(newerrors).length === 0) {
      // Form is valid, do something with the data
       const newContact = {
        //setting unique id to handle delete function
        id: uuidv4(), // Generate a unique ID
        firstName,
        lastName,
        email,
        phone,
       };
      // Add the new contact
      addContact(newContact);
      console.log('Form Submitted');
      console.log('First Name:', firstName);
      console.log('Last Name:', lastName);
      console.log('Email:', email);
      console.log('Phone Number:', phone);

      // Reset form fields and errors
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhone('');
      setErrors({});
      history('/contactList');
    } else {
      // Set the validation errors
      setErrors(newerrors);
    }
    
  
    
  };

  return (
    
    <Container maxWidth="sm" spacing ={2} justifycontent = "center">
      {/* <h1 justifycontent = "center"> Contact Form </h1> */}
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
