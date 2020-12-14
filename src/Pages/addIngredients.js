import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  addItems: {
    marginLeft: '10px'
  }
});

const AddIngredients = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" size="small" color="secondary" onClick={handleClickOpen} className={classes.addItems}>
        Add more Items
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Type Item Name</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add more items in the list, type the name of the item here.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Item Name"
            type="itemName"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button size="small" onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button size="small" onClick={handleClose} color="primary">
            Save Items
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddIngredients;