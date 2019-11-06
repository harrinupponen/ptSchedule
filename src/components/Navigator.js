import React from 'react';
import {Link} from 'react-router-dom';

const Navigator = () => {
    return (
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler navbar-toggler-right" type="button"
            data-toggle="collapse" data-target="#navbarSupportedContent"aria-
            controls="navbarSupportedContent" aria-expanded="false" 
            aria-label="Togglenavigation"><span className="navbar-toggler-icon"></span>
            </button>
            <Link className="navbar-brand" to="/" >Personal Trainer Schedule</Link>
            <div className="collapse navbar-collapse" id ="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Calendar</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/customers">Customers</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/trainings">Trainings</Link>
                    </li>
                </ul >
            </div>
        </nav>
    );
};

export default Navigator;