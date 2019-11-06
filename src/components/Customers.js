import React, {useState, useEffect} from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Addcustomer from './Addcustomer';
import Editcustomer from './Editcustomer';
import Grid from '@material-ui/core/Grid';

const Customers = () => {

    const [customers, setCustomers] = useState([]);
    const [open, setOpen] = useState(false);
    const [message, setMessage] =useState('');

    useEffect(() => {
        fetchCustomers();
    }, [])

    const fetchCustomers = () => {
        fetch('https://customerrest.herokuapp.com/api/customers')
        .then(response => response.json())
        .then(data => setCustomers(data.content))
        .catch(err => console.error(err))
    }

    const deleteCustomer = (link) => {
        if(window.confirm('Are you sure?')) {
            fetch(link, {method: 'DELETE'})
            .then(res => fetchCustomers())
            .then(res => setMessage('Customer deleted'))
            .then(res => setOpen(true))
            .catch(err => console.error(err))
        }
    }

    const saveCustomer = (newCustomer) => {
        fetch('https://customerrest.herokuapp.com/api/customers',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCustomer)
        }
        )
        .then(res => fetchCustomers())
        .catch(err => console.error(err))
    }

    const handleClose = (event, reason) => {
        setOpen(false);
      }

      const editCustomer = (customer, link) => {
        fetch(link, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(customer)
        })
        .then(res => fetchCustomers())
        .then(res => setMessage('Changes saved succesfully'))
        .then(res => setOpen(true))
        .catch(err => console.error(err))
      }

    const columns= [
        {
            Header: 'Firstname',
            accessor: 'firstname'
        },
        {
            Header: 'Lastname',
            accessor: 'lastname'
        },
        {
            Header: 'Street Address',
            accessor: 'streetaddress'
        },
        {
            Header: 'Post Code',
            accessor: 'postcode'
        },
        {
            Header: 'City',
            accessor: 'city'
        },
        {
            Header: 'Email',
            accessor: 'email'
        },
        {
            Header: 'Phone',
            accessor: 'phone'
        },
        {
            filterable: false,
            sortable: false,
            Cell: row => <Editcustomer editCustomer={editCustomer} customer={row.original}/>
        },
        {
            accessor: 'links[0].href',
            filterable: false,
            sortable: false,
            Cell: ({value}) => <Button color="secondary" size="medium" onClick={() => deleteCustomer(value)}>Delete</Button>
        }
    ]

    return (
        <div>
            <Grid container>
                <Grid item>
                    <Addcustomer saveCustomer={saveCustomer}/>
                </Grid>
            </Grid>
            <ReactTable columns={columns} data={customers} filterable={true}/>
            <Snackbar open={open} autoHideDuration={4000} onClose={handleClose} message={message}/>
        </div>
    );
};

export default Customers;