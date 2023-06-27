import React ,{ useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import { ContactContext } from '../Context/ContactContext';
import Box from '@material-ui/core/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@material-ui/core';
import EditIcon from '@mui/icons-material/Edit';

function ContactList() {
  const navigate = useNavigate()
  const { contacts, removeContact} = useContext(ContactContext);

  //to handle delete function
  const handleDeleteContact = (contactId) => {
    removeContact(contactId);
  };

  //Need to handle Edit function
  
  
  return (
    <div>
    <Box marginTop={4}>
    <Button type="button"  variant="contained" color="error" onClick={() => navigate('/')}>
     Create Contact
    </Button>
    </Box>
    <TableContainer component={Paper}>
     <Table  sx={{ minWidth: 650 }}>
       <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone Number</TableCell>
            <TableCell>Edit</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
       </TableHead>
       <TableBody>
          {contacts.map((contact, index) => (
            <TableRow key={index} scope ="row">
              <TableCell>{contact.firstName}</TableCell>
              <TableCell>{contact.lastName}</TableCell>
              <TableCell>{contact.email}</TableCell>
              <TableCell>{contact.phone}</TableCell>
              <TableCell>
                <IconButton aria-label='Edit'><EditIcon/></IconButton>
              </TableCell>
              <TableCell>
               <IconButton aria-label='Delete' onClick={() => handleDeleteContact(contact.id)}><DeleteIcon/></IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </div>
  )
}

export default ContactList