import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row, Table } from "react-bootstrap";

// Sample data for users
const initialUsers = [
  { id: 1, username: "admin", role: "Admin" },
  { id: 2, username: "jdoe", role: "Front Desk" },
  { id: 3, username: "msmith", role: "Housekeeping" },
];

export default function AdminSettings() {
  const [users, setUsers] = useState(initialUsers);
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("Admin");

  const handleUserSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: users.length + 1,
      username,
      role,
    };
    setUsers([...users, newUser]);
    setUsername("");
    setRole("Admin");
  };

  return (
    <Container>
      <Row className="my-4">
        <Col xs={12} md={6}>
          <Card>
            <Card.Header>System Configuration</Card.Header>
            <Card.Body>
              <Form>
                <Form.Group controlId="formBusinessName">
                  <Form.Label>Business Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter business name" />
                </Form.Group>
                <Form.Group controlId="formTimezone">
                  <Form.Label>Timezone</Form.Label>
                  <Form.Control as="select">
                    <option>GMT</option>
                    <option>UTC</option>
                    <option>EST</option>
                    <option>PST</option>
                    {/* Add more timezones as needed */}
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="formCurrency">
                  <Form.Label>Currency</Form.Label>
                  <Form.Control type="text" placeholder="Enter currency" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Save Settings
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={6}>
          <Card>
            <Card.Header>User Management</Card.Header>
            <Card.Body>
              <Table striped bordered>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Username</th>
                    <th>Role</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.username}</td>
                      <td>{user.role}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <Form onSubmit={handleUserSubmit}>
                <Form.Group controlId="formUsername">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formRole">
                  <Form.Label>Role</Form.Label>
                  <Form.Control
                    as="select"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  >
                    <option>Admin</option>
                    <option>Front Desk</option>
                    <option>Housekeeping</option>
                    <option>Maintenance</option>
                    {/* Add more roles as needed */}
                  </Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit">
                  Add User
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="my-4">
        <Col xs={12}>
          <Card>
            <Card.Header>Backup and Recovery</Card.Header>
            <Card.Body>
              <Button variant="warning" onClick={() => alert('Backup initiated')}>
                Backup Now
              </Button>
              <Button variant="danger" className="ml-2" onClick={() => alert('Restore initiated')}>
                Restore From Backup
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
