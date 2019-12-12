import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';

const Addcustomer = (props) => {

    const [open, setOpen] = useState(false);
    const [customer, setCustomer] = useState(
        {}
    )

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

      const handleChange = (event) => {
          setCustomer({...customer, [event.target.name]: event.target.value})
      }

      const addCustomer = () => {
          props.saveCustomer(customer);
          handleClose();
          setCustomer({})
      }

    return (
        <div>
      <Tooltip title="Add New Customer"> 
      <Fab color="primary" aria-label="add" onClick={handleClickOpen}>
        <AddIcon />
      </Fab>
      </Tooltip> 
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add new customer</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Fill the information of the new customer
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            name="firstname"
            value={customer.firstname}
            onChange={e => handleChange(e)}
            label="Firstname"
            fullWidth
          />
          <TextField
            margin="dense"
            name="lastname"
            value={customer.lastname}
            onChange={e => handleChange(e)}
            label="Lastname"
            fullWidth
          />
          <TextField
            margin="dense"
            name="streetaddress"
            value={customer.streetaddress}
            onChange={e => handleChange(e)}
            label="Street Address"
            fullWidth
          />
          <TextField
            margin="dense"
            name="postcode"
            value={customer.postcode}
            onChange={e => handleChange(e)}
            label="Postcode"
            fullWidth
          />
          <TextField
            margin="dense"
            name="city"
            value={customer.city}
            onChange={e => handleChange(e)}
            label="City"
            fullWidth
          />
          <TextField
            margin="dense"
            name="email"
            value={customer.email}
            onChange={e => handleChange(e)}
            label="Email"
            fullWidth
          />
          <TextField
            margin="dense"
            name="phone"
            value={customer.phone}
            onChange={e => handleChange(e)}
            label="Phone"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={addCustomer} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog> 
        </div>
    );
};

export default Addcustomer;