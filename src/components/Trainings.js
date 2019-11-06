import React, {useState, useEffect} from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Addtraining from './Addtraining';
import Grid from '@material-ui/core/Grid';
import moment from 'moment';
import Customers from './Customers';

const Trainings = () => {

    const [trainings, setTrainings] = useState([]);
    const [open, setOpen] = useState(false);
    const [message, setMessage] =useState('');

    useEffect(() => {
        fetchTrainings();
    }, [])

    const fetchTrainings = () => {
        fetch('https://customerrest.herokuapp.com/gettrainings')
        .then(response => response.json())
        .then(data => setTrainings(data))
        .catch(err => console.error(err))
    }

    const deleteTraining = (link) => {
        if(window.confirm('Are you sure?')) {
            fetch(link, {method: 'DELETE'})
            .then(res => fetchTrainings())
            .then(res => setMessage('Training deleted'))
            .then(res => setOpen(true))
            .catch(err => console.error(err))
        }
    }
                //------ TO BE COMLETED----------------
    const saveTraining = (newTraining) => {
        fetch('https://customerrest.herokuapp.com/api/trainings',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTraining)
        }
        )
        .then(res => fetchTrainings())
        .catch(err => console.error(err))
    }

                //----------------------------

    const handleClose = (event, reason) => {
        setOpen(false);
      }

    const columns= [
        {
            id: "formatDate",
            Header: 'Date',
            accessor: d => {
                return moment(d.date).format("DD-MM-YYYY hh:mm")
            }
            
        },
        {
            Header: 'Duration (min)',
            accessor: 'duration'
        },
        {
            Header: 'Activity',
            accessor: 'activity'
        },
        {
            id: "getFNameAndLName",
            Header: 'Customer',
            accessor: name => {
                return name.customer.firstname + " " + name.customer.lastname 
            }
        },
        {
            accessor: 'links[0].href',
            filterable: false,
            sortable: false,
            Cell: ({value}) => <Button color="secondary" size="small" onClick={() => deleteTraining(value)}>Delete</Button>
        }
    ]

    return (
        <div>
            <Grid container>
                <Grid item>
                    <Addtraining saveTraining={saveTraining}/>
                </Grid>
            </Grid>
            <ReactTable columns={columns} data={trainings} filterable={true}/>
            <Snackbar open={open} autoHideDuration={4000} onClose={handleClose} message={message}/>
        </div>
    );
};

export default Trainings;