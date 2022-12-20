import React from "react";
import Login from "./Pages/Login";
import "../node_modules/react-bootstrap/dist/react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Welcome from "./Pages/Welcome";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { Fragment } from "react";
import SentMail from "./Pages/sentMail";
import Mailbox from "./Pages/Mailbox";
import ComposeMail from "./Pages/ComposeMail";

function App() {
  return (
    <Fragment>
      <Switch>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/compose">
          <ComposeMail />
        </Route>
        <Route path="/mailbox">
          <Mailbox />
        </Route>
        <Route path="/sentmail">
          <SentMail />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
