
import React,{useEffect} from "react";
import { useSelector } from "react-redux";
import { fetchSentMail } from "../Store/compose-action";
import {
  Button,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import './sentMail.css';

const SentMail = () => {
  
  const sentData=useSelector((state)=>state.compose.sentData)

  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(fetchSentMail())
  },[dispatch])
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
            {/* <Col>
              <Button variant="danger" className="deletebtn">
                Delete
              </Button>
            </Col> */}
          </Row>
        </Container>
      </div>
    )
  })
  return <div>{sentList}</div>;
};

export default SentMail;