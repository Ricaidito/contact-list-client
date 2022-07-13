import { useState } from "react";
import Agenda from "./Agenda";
import { Form, Button, Modal } from "react-bootstrap";
import usersService from "../services/users-service";

const Login = () => {
  const [show, setShow] = useState(false);
  const [logged, setLogged] = useState(false);
  const [userToCreate, setUserToCreate] = useState({
    email: "",
    password: "",
  });
  const [user, setUser] = useState({
    userId: "",
    email: "",
    password: "",
  });

  const logIn = () => {
    const userToLog = { email: user.email, password: user.password };
    usersService
      .doLogIn(userToLog)
      .then(res => {
        setUser({ ...user, userId: res.data._id });
        setLogged(true);
      })
      .catch(() => alert("ERROR: Invalid credentials"));
  };

  const logOut = () => setLogged(false);

  const createAccount = () => {
    usersService.createAccount(userToCreate).then(res => {
      if (res.data.error) {
        alert(`ERROR: ${res.data.error}`);
        return;
      }
      clearModalFields();
      alert("Account successfully created!");
      handleClose();
    });
  };

  const clearModalFields = () =>
    setUserToCreate({
      email: "",
      password: "",
    });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return logged ? (
    <Agenda userId={user.userId} logOut={logOut} />
  ) : (
    <div className="m-2">
      <h1 className="text-center">Contact Agenda</h1>
      <hr />
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Email address:</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email..."
            required
            onChange={e => setUser({ ...user, email: e.target.value })}
            value={user.email}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password..."
            required
            onChange={e => setUser({ ...user, password: e.target.value })}
            value={user.password}
          />
        </Form.Group>
        <Button variant="primary" className="mx-2" onClick={handleShow}>
          Register
        </Button>
        <Button variant="success" className="mx-2" onClick={() => logIn()}>
          Login
        </Button>
      </Form>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Register an account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Email address:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email..."
                onChange={e =>
                  setUserToCreate({ ...userToCreate, email: e.target.value })
                }
                value={userToCreate.email}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password..."
                onChange={e =>
                  setUserToCreate({ ...userToCreate, password: e.target.value })
                }
                value={userToCreate.password}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={() => createAccount()}>
            Register
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Login;
