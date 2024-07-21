import React from "react";
import { Card, Col, Container, Row, Table } from "react-bootstrap";

// Sample data
const orders = [
  { id: 1, product: "Product A", quantity: 10, price: 20 },
  { id: 2, product: "Product B", quantity: 5, price: 50 },
  { id: 3, product: "Product C", quantity: 8, price: 30 },
];

export default function Order() {
  const totalOrders = orders.length;
  const totalRevenue = orders.reduce((acc, order) => acc + order.quantity * order.price, 0);
  const pendingOrders = 5; 

  return (
    <Container>
      <Row className="my-4">
        {/* Cards Section */}
        <Col xs={12} md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Total Orders</Card.Title>
              <Card.Text>{totalOrders}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Total Revenue</Card.Title>
              <Card.Text>${totalRevenue.toFixed(2)}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Pending Orders</Card.Title>
              <Card.Text>{pendingOrders}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Table Section */}
      <Row className="my-4">
        <Col xs={12}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.product}</td>
                  <td>{order.quantity}</td>
                  <td>${order.price}</td>
                  <td>${(order.quantity * order.price).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}
