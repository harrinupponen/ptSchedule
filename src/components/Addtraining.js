import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Tooltip from '@material-ui/core/Tooltip';
import Fab from '@material-ui/core/Fab';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import DiscreteSlider from './SliderControl';

const Addtraining = (props) => {

    const [open, setOpen] = useState(false);
    const [training, setTraining] = useState({date:'', activity:'', duration:'', customer:''});

    const handleClickOpen = () => {
        setTraining({...training, customer: props.customer.links[0].href})
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

      const handleChange = (event) => {
        setTraining({...training, [event.target.name]: event.target.value})
      }

      const addTraining = () => {
          props.saveTraining({...training, date: `${training.date}:00.000+02:00`})
          handleClose();
      }

    return (
        <div>
            <Tooltip title="Add Training">
           <Fab variant="contained" color="primary" size="small" onClick={handleClickOpen}>
           <DirectionsRunIcon/>
           </Fab>
           </Tooltip>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add new training</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Fill the information of the new training
          </DialogContentText>
          <TextField
            autoFocus
            id="datetime-local"
            margin="dense"
            name="date"
            type="datetime-local"
            onChange={e => handleChange(e)}
            value={training.date}
            label="Date"
            fullWidth
          />
          <DiscreteSlider training={training} setTraining={setTraining}
            margin='dense'
            value={training.duration}
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