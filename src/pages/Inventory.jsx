import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row, Table } from "react-bootstrap";

// Sample data for inventories
const initialRoomInventory = [
  { id: 1, type: "Single", rate: 100, availability: "Available" },
  { id: 2, type: "Double", rate: 150, availability: "Occupied" },
  { id: 3, type: "Suite", rate: 250, availability: "Available" },
];

const initialSuppliesInventory = [
  { id: 1, item: "Towels", quantity: 50 },
  { id: 2, item: "Shampoo Bottles", quantity: 30 },
  { id: 3, item: "Toiletries", quantity: 20 },
];

export default function InventoryManagement() {
  const [roomInventory, setRoomInventory] = useState(initialRoomInventory);
  const [suppliesInventory, setSuppliesInventory] = useState(initialSuppliesInventory);

  const [roomType, setRoomType] = useState("");
  const [roomRate, setRoomRate] = useState("");
  const [roomAvailability, setRoomAvailability] = useState("Available");

  const [supplyItem, setSupplyItem] = useState("");
  const [supplyQuantity, setSupplyQuantity] = useState("");

  const handleRoomSubmit = (e) => {
    e.preventDefault();
    const newRoom = {
      id: roomInventory.length + 1,
      type: roomType,
      rate: parseFloat(roomRate),
      availability: roomAvailability,
    };
    setRoomInventory([...roomInventory, newRoom]);
    setRoomType("");
    setRoomRate("");
    setRoomAvailability("Available");
  };

  const handleSupplySubmit = (e) => {
    e.preventDefault();
    const newSupply = {
      id: suppliesInventory.length + 1,
      item: supplyItem,
      quantity: parseInt(supplyQuantity, 10),
    };
    setSuppliesInventory([...suppliesInventory, newSupply]);
    setSupplyItem("");
    setSupplyQuantity("");
  };

  return (
    <Container>
      <Row className="my-4">
        <Col xs={12} md={6}>
          <Card>
            <Card.Header>Room Inventory</Card.Header>
            <Card.Body>
              <Table striped bordered>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Type</th>
                    <th>Rate</th>
                    <th>Availability</th>
                  </tr>
                </thead>
                <tbody>
                  {roomInventory.map((room) => (
                    <tr key={room.id}>
                      <td>{room.id}</td>
                      <td>{room.type}</td>
                      <td>${room.rate.toFixed(2)}</td>
                      <td>{room.availability}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <Form onSubmit={handleRoomSubmit}>
                <Form.Group controlId="formRoomType">
                  <Form.Label>Room Type</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter room type"
                    value={roomType}
                    onChange={(e) => setRoomType(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formRoomRate">
                  <Form.Label>Rate</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter room rate"
                    value={roomRate}
                    onChange={(e) => setRoomRate(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formRoomAvailability">
                  <Form.Label>Availability</Form.Label>
                  <Form.Control
                    as="select"
                    value={roomAvailability}
                    onChange={(e) => setRoomAvailability(e.target.value)}
                  >
                    <option>Available</option>
                    <option>Occupied</option>
                    <option>Under Maintenance</option>
                  </Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit">
                  Add Room
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={6}>
          <Card>
            <Card.Header>Supplies Inventory</Card.Header>
            <Card.Body>
              <Table striped bordered>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Item</th>
                    <th>Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {suppliesInventory.map((supply) => (
                    <tr key={supply.id}>
                      <td>{supply.id}</td>
                      <td>{supply.item}</td>
                      <td>{supply.quantity}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <Form onSubmit={handleSupplySubmit}>
                <Form.Group controlId="formSupplyItem">
                  <Form.Label>Supply Item</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter supply item"
                    value={supplyItem}
                    onChange={(e) => setSupplyItem(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formSupplyQuantity">
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter quantity"
                    value={supplyQuantity}
                    onChange={(e) => setSupplyQuantity(e.target.value)}
                    required
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Add Supply
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}