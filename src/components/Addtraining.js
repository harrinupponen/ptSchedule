import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const Addtraining = (props) => {

    const [open, setOpen] = useState(false);
    const [training, setTraining] = useState(
        {}
    )

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

      const handleChange = (event) => {
          setTraining({...training, [event.target.name]: event.target.value})
      }

      const addTraining = () => {
          props.saveTraining(training);
          handleClose();
          setTraining({})
      }

    return (
        <div>
           <Button style={{margin: 20}} variant="outlined" color="primary" onClick={handleClickOpen}>
        Add New Training
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add new training</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Fill the information of the new training
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            name="date"
            value={training.date}
            onChange={e => handleChange(e)}
            label="Date"
            fullWidth
          />
          <TextField
            margin="dense"
            name="duration"
            value={training.duration}
            onChange={e => handleChange(e)}
            label="Duration"
            fullWidth
          />
          <TextField
            margin="dense"
            name="activity"
            value={training.activity}
            onChange={e => handleChange(e)}
            label="Activity"
            fullWidth
          />
          <TextField
            margin="dense"
            name="customer"
            value={training.customer}
            onChange={e => handleChange(e)}
            label="Customer"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={addTraining} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog> 
        </div>
    );
};

export default Addtraining;