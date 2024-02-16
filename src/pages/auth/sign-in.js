import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { useState } from "react";

const SignIn = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <Card className="shadow p-5 w-50 border-0">
          <Form onSubmit={handleSubmit}>
            <h1 className="mb-4">SignIn</h1>
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
            <Button variant="success" type="submit" className="mb-3">
              Submit
            </Button>
          </Form>
          <Link to="/sign-up">{`Don't have an account?`}</Link>
        </Card>
      </Container>
    </>
  );
};

export default SignIn;
