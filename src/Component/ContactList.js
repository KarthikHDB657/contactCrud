import React ,{ useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'
import { ContactContext } from '../Context/ContactContext';

function ContactList() {
  const navigate = useNavigate()
  const { contacts } = useContext(ContactContext);
  return (
    <div>
    <Grid item xl={12}>
    <Button type="button"  variant="contained" color="error" onClick={() => navigate('/')}>
     Create Contact
    </Button>
    </Grid>
    <table>
    <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <tr key={index}>
              <td>{contact.firstName}</td>
              <td>{contact.lastName}</td>
              <td>{contact.email}</td>
              <td>{contact.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}

export default ContactList