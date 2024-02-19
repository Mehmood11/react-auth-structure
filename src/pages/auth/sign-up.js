import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signUpApi } from "../../store/slices/auth/auth-api";
import { unwrapResult } from "@reduxjs/toolkit";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState(null);
  const [user, setUser] = useState({
    email: "",
    password: "",
    name: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const payload = {
      email: user.email,
      password: user.password,
      name: user.name,
    };
    try {
      const response = await dispatch(signUpApi(payload));
      const { data, status } = unwrapResult(response);
      switch (status) {
        case 201:
          navigate("/");
          break;
        default:
          setErrorMessage(data?.message);
          break;
      }
    } catch (error) {
      setErrorMessage(error?.message);
    } finally {
    }
  };

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <Card className="shadow p-5 w-50 border-0">
        <Form onSubmit={handleSubmit}>
          <h1 className="mb-4">SignUp</h1>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="name"
              type="text"
              placeholder="Enter Name"
              value={user.name}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter email"
              value={user.email}
              onChange={handleInputChange}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              value={user.password}
              onChange={handleInputChange}
            />
          </Form.Group>
          <h4>{errorMessage}</h4>
          <Button variant="success" type="submit" className="mb-3">
            SignUp
          </Button>
        </Form>
        <Link to="/sign-in">{`Already have an account?`}</Link>
      </Card>
    </Container>
  );
};

export default SignUp;
