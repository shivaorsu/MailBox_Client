//import React, { useEffect } from "react";
//import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
// import { Button } from "react-bootstrap";
// import Container from "react-bootstrap";
// import Row from "react-bootstrap";
// import Col from "react-bootstrap";
import {
  Button,
  Col,
  Container,
  Row,
} from "react-bootstrap";

const SentMail = () => {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const email = localStorage.getItem("email");
  //     const mail = email.replace(/[^a-zA-Z0-9]/g, "");
  //     const response = await axios.get(
  //       `https://mail-box-382e9-default-rtdb.firebaseio.com/${mail}.json`
  //     );
  //     console.log(response.data);
  //     let data = [];
  //     for (const key in response.data) {
  //       if (response.data[key].sent) {
  //         data.push({
  //           To: response.data[key].sent.To,
  //           message: response.data[key].sent.message,
  //         });
  //       }
  //     }
  //     console.log(data);
  //   };
  //   fetchData();
  // });
  const sentData=useSelector((state)=>state.compose.sentData)
  console.log(sentData)

  const sentList=sentData.map((data)=>{
    return(
      <div>
        <Container>
          <Row xs={3} className="bg-light border p-3">
            <Col>
              <div>To:{data.To}</div>
            </Col>
            <Col>
              <div>Message:{data.message}</div>
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
  })
  return <div>{sentList}</div>;
};

export default SentMail;