import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row, Table } from "react-bootstrap";

// Sample data for maintenance requests
const initialRequests = [
  { id: 1, room: "101", issue: "Leaky faucet", status: "Pending" },
  { id: 2, room: "202", issue: "AC not working", status: "In Progress" },
  { id: 3, room: "305", issue: "Broken window latch", status: "Completed" },
];

export default function Maintenance() {
  const [requests, setRequests] = useState(initialRequests);
  const [room, setRoom] = useState("");
  const [issue, setIssue] = useState("");
  const [status, setStatus] = useState("Pending");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRequest = {
      id: requests.length + 1,
      room,
      issue,
      status,
    };
    setRequests([...requests, newRequest]);
    setRoom("");
    setIssue("");
  };
  return (
<>
<Container>
      <Row className="my-4">
        <Col xs={12}>
          <Card>
            <Card.Header>Maintenance Requests</Card.Header>
            <Card.Body>
              <Table striped bordered>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Room</th>
                    <th>Issue</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {requests.map((request) => (
                    <tr key={request.id}>
                      <td>{request.id}</td>
                      <td>{request.room}</td>
                      <td>{request.issue}</td>
                      <td>{request.status}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="my-4">
        <Col xs={12}>
          <Card>
            <Card.Header>Submit Maintenance Request</Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formRoom">
                  <Form.Label>Room Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter room number"
                    value={room}
                    onChange={(e) => setRoom(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formIssue">
                  <Form.Label>Issue</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Describe the issue"
                    value={issue}
                    onChange={(e) => setIssue(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formStatus">
                  <Form.Label>Status</Form.Label>
                  <Form.Control
                    as="select"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option>Pending</option>
                    <option>In Progress</option>
                    <option>Completed</option>
                  </Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit Request
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
</>
  )}
