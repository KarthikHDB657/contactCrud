import React from 'react';
import { Dialog, DialogTitle,DialogContentText, DialogContent, DialogActions, Button } from '@material-ui/core';

const DeleteDialog = ({ open, onCancel, onConfirm }) => {
  return (
    <Dialog open={open} onClose={onCancel}>
      <DialogTitle>Are you sure you want to delete?</DialogTitle>
      <DialogContent>
        <DialogContentText>
          This action cannot be undone. Are you sure you want to delete the contact?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel} variant ='contained' color="primary">
          Cancel
        </Button>
        <Button onClick={onConfirm} variant ='contained' color="error">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteDialog;
