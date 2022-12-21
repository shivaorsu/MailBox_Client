//import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import { Button,Col,Container,Row } from "react-bootstrap";

const Inbox = () => {
  const recievedData= useSelector((state)=> state.compose.recievedData);

  console.log(recievedData);

  const recievedList= recievedData.map((data)=>{
    return (
      <div>
        <Container>
          <Row  xs={3} className="bg-light border p-3">
            <Col>
            <div>From:{data.From}</div>
            </Col>
            <Col>
            <div>Message:{data.Message}</div>
            </Col>
            <Col>
            <Button variant="danger" className="deletebtn">
              Delete
            </Button>
            </Col>
          </Row>
        </Container>
      </div>
    )
  });
  return<div>{recievedList}</div>
};

export default Inbox;