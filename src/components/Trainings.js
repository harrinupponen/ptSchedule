import React, {useState, useEffect} from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Grid from '@material-ui/core/Grid';
import moment from 'moment';

const Trainings = () => {

    const [trainings, setTrainings] = useState([]);
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetchTrainings();
    }, [])

    const fetchTrainings = () => {
        fetch('https://customerrest.herokuapp.com/api/trainings')
        .then(response => response.json())
        .then(data => setTrainings(data.content))
        .catch(err => console.error(err))
    }

    const deleteTraining = (link) => {
        if(window.confirm('Are you sure?')) {
            fetch(link, {method: 'DELETE'})
            .then(res => fetchTrainings())
            .then(setMessage('Training deleted'))
            .then(setOpen(true))
            .catch(err => console.error(err))
        }
    }

    const handleClose = (event, reason) => {
        setOpen(false);
      }

    const columns= [
        {
            id: "formatDate",
            Header: 'Date',
            accessor: d => {
                return moment(d.date).format("DD-MM-YYYY HH:mm")
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
                return name.firstname + " " + name.lastname
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
            </Grid>
            <ReactTable columns={columns} data={trainings} filterable={true}/>
            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} message={message}/>
        </div>
    );
};

export default Trainings;