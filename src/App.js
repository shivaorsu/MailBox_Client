import React from 'react';
import Login from './Pages/Login';
import '../node_modules/react-bootstrap/dist/react-bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Welcome from './Pages/Welcome';
import { Route,Switch } from 'react-router-dom';
import './App.css'
 import { Fragment } from 'react';



function App() {
  return (
    <Fragment>
      <Switch>
        {/* <Route path="/login">
          <Login />
        </Route>
        <Route path="/welcome">
          <Welcome />
        </Route> */}
        
          <Login />
          <Route path="/welcome">
          <Welcome />
        </Route> 
        
      </Switch>
      </Fragment>
    
  );
}

export default App;
