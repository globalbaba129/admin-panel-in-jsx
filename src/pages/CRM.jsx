import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row, Table } from "react-bootstrap";

// Sample data for CRM
const initialGuests = [
  { id: 1, name: "John Doe", email: "john.doe@example.com" },
  { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
];

const initialFeedback = [
  { id: 1, guest: "John Doe", feedback: "Great stay!", date: "2024-07-20" },
  { id: 2, guest: "Jane Smith", feedback: "Could be better.", date: "2024-07-19" },
];

export default function CRM() {
  const [guests, setGuests] = useState(initialGuests);
  const [feedback, setFeedback] = useState(initialFeedback);
  const [selectedGuest, setSelectedGuest] = useState("");
  const [message, setMessage] = useState("");
  const [loyaltyPoints, setLoyaltyPoints] = useState({});

  const handleSendMessage = (e) => {
    e.preventDefault();
    // Handle message sending logic
    alert(`Message sent to ${selectedGuest}: ${message}`);
    setMessage("");
  };

  const handleLoyaltyUpdate = (guestId) => {
    // Handle loyalty points update logic
    alert(`Updated loyalty points for guest ID: ${guestId}`);
  };

  return (
    <Container>
      <Row className="my-4">
        <Col xs={12} md={6}>
          <Card>
            <Card.Header>Guest Communication</Card.Header>
            <Card.Body>
              <Form onSubmit={handleSendMessage}>
                <Form.Group controlId="formGuest">
                  <Form.Label>Select Guest</Form.Label>
                  <Form.Control
                    as="select"
                    value={selectedGuest}
                    onChange={(e) => setSelectedGuest(e.target.value)}
                    required
                  >
                    <option value="">Select a guest</option>
                    {guests.map((guest) => (
                      <option key={guest.id} value={guest.name}>{guest.name}</option>
                    ))}
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter your message here"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Send Message
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={6}>
          <Card>
            <Card.Header>Loyalty Programs</Card.Header>
            <Card.Body>
              <Table striped bordered>
                <thead>
                  <tr>
                    <th>Guest</th>
                    <th>Loyalty Points</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {guests.map((guest) => (
                    <tr key={guest.id}>
                      <td>{guest.name}</td>
                      <td>{loyaltyPoints[guest.id] || 0}</td>
                      <td>
                        <Button
                          variant="success"
                          onClick={() => handleLoyaltyUpdate(guest.id)}
                        >
                          Update Points
                        </Button>
                      </td>
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
            <Card.Header>Guest Feedback</Card.Header>
            <Card.Body>
              <Table striped bordered>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Guest</th>
                    <th>Feedback</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {feedback.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.guest}</td>
                      <td>{item.feedback}</td>
                      <td>{item.date}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
