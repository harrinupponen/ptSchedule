import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch,
  } from 'react-router-dom';
  import Home from './Home';
  import Customers from './Customers';
  import Trainings from './Trainings'
  import Navigator from './Navigator';
  

const Router = () => {
    return (
        <BrowserRouter>
            <div>
                <Navigator/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/customers" component={Customers}/>
                    <Route path="/trainings" component={Trainings}/>
                    <Route render={() => <h1>Page not found</h1>}/>
                </Switch>
            </div>
        </BrowserRouter>
        
    );
};

export default Router;