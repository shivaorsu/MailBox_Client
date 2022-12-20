import { useState, useRef } from "react";
import {
  Button,
  Card,
  Row,
  Col,
  Container,
  FloatingLabel,
  Form,
} from "react-bootstrap";
import axios from "axios";
import "./Login.css";
import { useHistory } from "react-router-dom";

const Login = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmPasswordRef = useRef();
  const [isLogin, setIsLogin] = useState(false);
  const history = useHistory();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCw_7pof-yrknu5OzwNxXDNS34jKwl8rMo";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCw_7pof-yrknu5OzwNxXDNS34jKwl8rMo";
    }

    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;
    //const confirmPassword = confirmPasswordRef.current.value;
    if (!isLogin) {
      const confirmPassword = confirmPasswordRef.current.value;
      if (password !== confirmPassword) {
        alert("Password did not match");
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
          localStorage.setItem("token", token);
          console.log("User has successfully signed up");
          history.replace('/welcome')
          console.log(response);
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
                      />
                    </FloatingLabel>
                  </Form.Group>
                  <Form.Group>
                    <FloatingLabel label="Password" className="mb-3">
                      <Form.Control
                        ref={passwordInputRef}
                        type="password"
                        placeholder="Password"
                      />
                    </FloatingLabel>
                  </Form.Group>
                  {!isLogin && <Form.Group className="mb-3" aria-setsize={5}>
                  
                    <FloatingLabel label="Confirm Password" className="mb-3">
                      <Form.Control
                        ref={confirmPasswordRef}
                        type="password"
                        placeholder="Confirm Password"
                      />
                    </FloatingLabel>
                  </Form.Group>}
                  <Form.Group>
                    <div className="d-grid gap-1">
                      <Button type="submit">
                        {isLogin ? "Login" : "Signup"}{" "}
                      </Button>
                    </div>
                    {isLogin &&<p className="forgot">Forgot Password</p>}
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
