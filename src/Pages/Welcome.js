import { Button } from "react-bootstrap";
import React from "react";
import { useHistory } from "react-router-dom";

const Welcome = () => {
  const history = useHistory();
  const mailboxHandler = () => {
    history.replace("/mailbox");
  };
  return (
    <div>
      <h1>Welcome to your mailbox!!</h1>
      <Button variant="success" onClick={mailboxHandler}>
        Go to MailBox
      </Button>
    </div>
  );
};

export default Welcome;