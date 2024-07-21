import React from "react";
import { Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap";

export default function Security() {
  return (
<>
<Container>
      <Row className="my-4">
        {/* User Access Management */}
        <Col xs={12} md={6}>
          <Card>
            <Card.Body>
              <Card.Title>User Access Management</Card.Title>
              <ListGroup>
                <ListGroup.Item>
                  <strong>Admin Users:</strong> Manage user roles and permissions.
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Guest Access:</strong> Control access for guest services.
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button variant="primary">Manage Users</Button>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>

        {/* Security Logs */}
        <Col xs={12} md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Security Logs</Card.Title>
              <ListGroup>
                <ListGroup.Item>
                  <strong>Recent Activities:</strong> View recent security activities and events.
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Audit Trails:</strong> Access detailed audit logs for security analysis.
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button variant="primary">View Logs</Button>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="my-4">
        {/* Security Settings */}
        <Col xs={12}>
          <Card>
            <Card.Body>
              <Card.Title>Security Settings</Card.Title>
              <ListGroup>
                <ListGroup.Item>
                  <strong>Password Policies:</strong> Configure password complexity requirements.
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Two-Factor Authentication:</strong> Enable or disable 2FA for user accounts.
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Security Alerts:</strong> Set up alerts for suspicious activities.
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button variant="primary">Configure Settings</Button>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>

</>
  )
}
