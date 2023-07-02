import React, { useContext,useState } from 'react';
import { ContactContext } from '../Context/ContactContext';
import DeleteDialog from './DeleteDialog';

//Delete contact operation
const DeleteContact = ({ contactId, children }) => {
  const { removeContact } = useContext(ContactContext);
  const [confirmDeleteDialogOpen, setConfirmDeleteDialogOpen] = useState(false);

  const handleDeleteContact = () => {
    removeContact(contactId);
    setConfirmDeleteDialogOpen(false);
  };

  const handleCancelDelete = () => {
    setConfirmDeleteDialogOpen(false);
  };

  return (
    <>
      <span onClick={() => setConfirmDeleteDialogOpen(true)}>{children}</span>
      <DeleteDialog
        open={confirmDeleteDialogOpen}
        onCancel={handleCancelDelete}
        onConfirm={handleDeleteContact}
      />
    </>
  );
};

export default DeleteContact;
