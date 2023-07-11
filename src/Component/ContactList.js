import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContactContext } from '../Context/ContactContext';
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper,Button,Box,IconButton,Typography,Dialog,DialogTitle,DialogContent,} from '@material-ui/core';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ContactForm from './ContactForm';
import DeleteContact from './DeleteContact';
import SearchContact from './SearchContact';

function ContactList() {
  const navigate = useNavigate();
  const { contacts } = useContext(ContactContext);
  const [isEditDialogOpen, setEditDialogOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState('');

  useEffect(() => {
    if (selectedContact) {
      setEditDialogOpen(true);
    } else {
      setEditDialogOpen(false);
    }
  }, [selectedContact]);

  const handleCancelEdit = () => {
    setSelectedContact(null);
  };

  const handleSearch = (keyword) => {
    setSearchKeyword(keyword);
  };

  const filteredContacts = searchKeyword
    ? contacts.filter(
        (contact) =>
          contact.firstName.toLowerCase().includes(searchKeyword.toLowerCase()) ||
          contact.lastName.toLowerCase().includes(searchKeyword.toLowerCase())
      )
    : contacts;

  return (
    <div>
      <Box display="flex" justifyContent="flex-end" alignItems="center" marginBottom={2}>
        <Button type="button" size="small" variant="contained" color="error" onClick={() => navigate('/')}>
          Create Contact
        </Button>
        <SearchContact onSearch={handleSearch} style={{ marginLeft: '8px' }} />
      </Box>

      {filteredContacts.length === 0 ? (
        <Typography variant="body1">No users found.</Typography>
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone Number</TableCell>
                <TableCell>Delete</TableCell>
                <TableCell>Edit</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredContacts.map((contact, index) => (
                <TableRow key={index} scope="row">
                  <TableCell>{contact.firstName}</TableCell>
                  <TableCell>{contact.lastName}</TableCell>
                  <TableCell>{contact.email}</TableCell>
                  <TableCell>{contact.phone}</TableCell>
                  <TableCell>
                    <DeleteContact contactId={contact.id}>
                      <IconButton aria-label="Delete">
                        <DeleteIcon />
                      </IconButton>
                    </DeleteContact>
                  </TableCell>
                  <TableCell>
                    <IconButton aria-label="Edit" onClick={() => setSelectedContact(contact)}>
                      <EditIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      <Dialog open={isEditDialogOpen} onClose={handleCancelEdit}>
        <DialogTitle>Edit Contact</DialogTitle>
        <DialogContent>
        <ContactForm contact={selectedContact} onCancel = {handleCancelEdit}/>
        {/*  */}
        </DialogContent>
      </Dialog>
      
    </div>
  );
}

export default ContactList;
