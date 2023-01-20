import React, { useRef, useState } from "react";
import "./Login.css";
import {
  Button,
  Card,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../Store/authReducer";

const Login = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmPasswordRef = useRef();
  const [isLogin, setIsLogin] = useState(false);
  const history = useHistory();
 const dispatch = useDispatch()
  const formSubmitHandler = (e) => {
    e.preventDefault();
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDJKE6r3H_2s0lMK9vWaKniHaafhiSqmrM";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDJKE6r3H_2s0lMK9vWaKniHaafhiSqmrM";
    }

    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;

    if (!isLogin) {
      const confirmPassword = confirmPasswordRef.current.value;
      if (password !== confirmPassword) {
        alert("Password did not match");
        return;
      }
    }
    axios
      .post(url, {
        email: email,
        password: password,
        returnSecureToken: true,
      })
      .then((response) => {
        if (response.status === 200) {
          const token = response.data.idToken;
          const email = response.data.email
          localStorage.setItem("token", token);
          localStorage.setItem('email',email)
          dispatch(authActions.login({
            token,
            email
          }))
          console.log("User has successfully signed up");
          history.replace("/welcome");

        }
      })
      .catch((err) => {
        alert("Authentication Failed");
      });
  };
  const switchLoginHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  return (
    <div className="outer">
      <Container>
        <Row className="row">
          <Col xs={4} className="column">
            <Card>
              <Card.Header
                style={{
                  backgroundColor: "#0D6EFD",
                  textAlign: "center",
                  color: "white",
                }}
              >
                <h3>{isLogin ? "Login" : "Signup"}</h3>
              </Card.Header>
              <Card.Body>
                <Form onSubmit={formSubmitHandler}>
                  <Form.Group>
                    <FloatingLabel label="Email" className="mb-3 ">
                      <Form.Control
                        ref={emailInputRef}
                        className="forminput"
                        type="email"
                        placeholder="name@example.com"
                        autoComplete="on"
                        required
                      />
                    </FloatingLabel>
                  </Form.Group>
                  <Form.Group>
                    <FloatingLabel label="Password" className="mb-3">
                      <Form.Control
                        ref={passwordInputRef}
                        type="password"
                        placeholder="Password"
                        required
                      />
                    </FloatingLabel>
                  </Form.Group>
                  {!isLogin && (
                    <Form.Group className="mb-3" aria-setsize={5}>
                      <FloatingLabel label="Confirm Password" className="mb-3">
                        <Form.Control
                          ref={confirmPasswordRef}
                          type="password"
                          placeholder="Confirm Password"
                        />
                      </FloatingLabel>
                    </Form.Group>
                  )}
                  <Form.Group>
                    <div className="d-grid gap-1">
                      <Button type="submit">
                        {isLogin ? "Login" : "Signup"}{" "}
                      </Button>
                    </div>
                    {isLogin && <p className="forgot">Forgot Password</p>}
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col className="p-3" xs={4}>
            <Card className="p-1">
              <p>
                {isLogin
                  ? "Dont have an account? "
                  : "Already have an account?"}
                <span onClick={switchLoginHandler}>
                  {isLogin ? "Signup" : "Login"}
                </span>
              </p>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;