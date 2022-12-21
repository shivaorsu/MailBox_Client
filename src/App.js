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
//import { fetchRecievedMail,fetchSentMail } from "./Store/compose-action";
//import { useDispatch } from "react-redux";
import Inbox from "./Pages/Inbox";
import MessageBox from "./Pages/MessageBox";

function App() {
  // const dispatch=useDispatch();
  // useEffect(()=>{
  //   dispatch(fetchRecievedMail);
  //   dispatch(fetchSentMail)
  //})

  return (
    <Fragment>
      
      <Switch>

        <Route path="/" exact>
          <Login />
        </Route>
       
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/compose">
          <Mailbox/>
          <ComposeMail />
        </Route>
        <Route path="/mailbox">
          <Mailbox />
        </Route>
        <Route path="/sentmail">
          <Mailbox/>
          <SentMail />
        </Route>
        <Route path='/inbox'exact>
          <Mailbox/>
          <Inbox/>
        </Route>
        <Route path='/inbox/:email'>
          <Mailbox/>
          <MessageBox/>
        </Route>
      </Switch>

    </Fragment>
  );
}

export default App;
