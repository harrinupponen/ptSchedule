import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch,
  } from 'react-router-dom';
  import CalendarPage from './CalendarPage';
  import Customers from './Customers';
  import Trainings from './Trainings'
  import Navigator from './Navigator';
  

const Router = () => {
    return (
        <BrowserRouter>
            <div>
                <Navigator/>
                <Switch>
                    <Route exact path="/" component={CalendarPage}/>
                    <Route path="/customers" component={Customers}/>
                    <Route path="/trainings" component={Trainings}/>
                    
                </Switch>
            </div>
        </BrowserRouter>
        
    );
};

export default Router;