import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row, Table } from "react-bootstrap";

// Sample data for menu items
const menuItems = [
  { id: 1, name: "Burger", price: 5.99 },
  { id: 2, name: "Pizza", price: 8.99 },
  { id: 3, name: "Pasta", price: 7.49 },
  { id: 4, name: "Salad", price: 4.99 },
];

export default function POS() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [order, setOrder] = useState([]);
  const [itemId, setItemId] = useState("");
  const [quantity, setQuantity] = useState(1);

  const addToOrder = () => {
    const item = menuItems.find((item) => item.id === parseInt(itemId));
    if (item) {
      const newOrder = [...order, { ...item, quantity }];
      setOrder(newOrder);
      setSelectedItems(newOrder);
    }
  };

  const handleItemChange = (e) => setItemId(e.target.value);
  const handleQuantityChange = (e) => setQuantity(parseInt(e.target.value, 10));

  const getTotalAmount = () => {
    return order.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const finalizeOrder = () => {
    alert(`Order finalized. Total amount: $${getTotalAmount()}`);
    setOrder([]);
  };

  return (
    <Container>
      <Row className="my-4">
        <Col xs={12} md={6}>
          <Card>
            <Card.Header>Menu Items</Card.Header>
            <Card.Body>
              <Form>
                <Form.Group controlId="formItem">
                  <Form.Label>Item</Form.Label>
                  <Form.Control as="select" value={itemId} onChange={handleItemChange}>
                    <option value="">Select an item</option>
                    {menuItems.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.name} - ${item.price.toFixed(2)}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="formQuantity">
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control
                    type="number"
                    value={quantity}
                    min="1"
                    onChange={handleQuantityChange}
                  />
                </Form.Group>
                <Button variant="primary" onClick={addToOrder}>
                  Add to Order
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={6}>
          <Card>
            <Card.Header>Order Summary</Card.Header>
            <Card.Body>
              <Table striped bordered>
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {order.map((item, index) => (
                    <tr key={index}>
                      <td>{item.name}</td>
                      <td>{item.quantity}</td>
                      <td>${item.price.toFixed(2)}</td>
                      <td>${(item.price * item.quantity).toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <div className="d-flex justify-content-between">
                <h5>Total Amount:</h5>
                <h5>${getTotalAmount()}</h5>
              </div>
              <Button variant="success" className="mt-3" onClick={finalizeOrder}>
                Finalize Order
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
