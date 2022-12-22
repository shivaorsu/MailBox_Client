//import axios from "axios"
import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { deleteMessage,fetchRecievedMail } from "../Store/compose-action";

const Inbox = () => {
  const recievedData = useSelector((state) => state.compose.recievedData);
  const dispatch = useDispatch();

  console.log(recievedData);
  useEffect(() => {
    dispatch(fetchRecievedMail());
  }, [dispatch]);
  const deleteMessageHandler = (id) => {
    dispatch(deleteMessage(id));
  };

  const recievedList = recievedData.map((data) => {
    console.log(data);
    const url = `/inbox/${data.message}`;
    return (
      <div>
        <Container>
          <Row xs={3} className="bg-light border p-3">
            <Col xs={1}>
              <div className={data.read ? "read" : "status"}></div>
            </Col>
            <Link to={{ pathname: url, state: data }}>
              <Col>
                <div>From:{data.From}</div>
              </Col>
            </Link>
            <Col xs={3}>
              <div>Message:{data.Message}</div>
            </Col>
            <Col>
              <Button
                onClick={() => deleteMessageHandler(data.id)}
                variant="danger"
                className="deletebtn"
              >
                Delete
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  });
  return <div>{recievedList}</div>;
};

export default Inbox;
