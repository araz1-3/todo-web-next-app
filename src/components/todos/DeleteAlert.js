import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
const DeleteAlert = ({open,setOpen ,todoId,onDelete}) => {

  const handleClose = () => {
    setOpen(false);
  };
 
  return (
    <div>
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Are sure to delete this item?"}
      </DialogTitle>
      <DialogActions>
        <Button variant="outlined" onClick={handleClose}>Cancel</Button>
        <Button className='text-red-600' onClick={() => onDelete(todoId)} autoFocus>
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  </div>
  );
};

export default DeleteAlert;