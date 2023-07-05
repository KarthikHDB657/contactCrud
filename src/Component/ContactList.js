import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContactContext } from '../Context/ContactContext';
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import {Button, Box,IconButton,Typography } from '@material-ui/core';
import EditIcon from '@mui/icons-material/Edit';
import EditDialog from './EditDialog';
import DeleteContact from './DeleteContact';
import SearchContact from './SearchContact';


function ContactList() {
  const navigate = useNavigate();
  const { contacts, updateContact } = useContext(ContactContext);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [editingContact, setEditingContact] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState('');

  //For edit operation
  const handleEditClick = (contact) => {
    setEditingContact(contact);
    setEditDialogOpen(true);
  };

  const handleUpdateContact = (updatedContact) => {
    updateContact(updatedContact);
    setEditDialogOpen(false);
  };

  const handleCancelEdit = () => {
    setEditDialogOpen(false);
  };

  //for search
  const handleSearch = (keyword) => {
    setSearchKeyword(keyword);
  };

  const filteredContacts = searchKeyword
    ? contacts.filter((contact) => contact.firstName.toLowerCase() === searchKeyword.toLowerCase())
    : contacts;

  return (
    <div>
     <Box display="flex" justifyContent="flex-end" alignItems="center" marginBottom={2}>
        <Button type="button" size="small" variant="contained" color="error" onClick={() => navigate('/')}style={{ marginRight: '8px' }}>
         Create Contact
        </Button>
        <SearchContact onSearch={handleSearch} style={{ marginLeft: '8px' }} />
     </Box>

      {/* handling search */}
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
                  <IconButton aria-label="Edit" onClick={() => handleEditClick(contact)}>
                    <EditIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>)}
      {editingContact && (
        <EditDialog
          contact={editingContact}
          onUpdate={handleUpdateContact}
          onCancel={handleCancelEdit}
          open={editDialogOpen}
        />
      )}
    </div>
  );
}

export default ContactList;
