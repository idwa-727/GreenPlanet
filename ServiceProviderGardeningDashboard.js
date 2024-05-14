import React from "react";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const ServiceProviderGardeningDashboard = () => {
  return (
    <Container>
      <h2 style={styles.heading}>Welcome to Service Provider Gardening Dashboard</h2>
      <Row>
        <Col md={6} className="mb-4">
          <Card style={styles.card}>
            <Card.Body>
              <Card.Title style={styles.cardTitle}>Recent Orders</Card.Title>
              <Card.Text style={styles.cardText}>
                Check out your recent orders here.
              </Card.Text>
              <Button variant="outline-success">View Orders</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card style={styles.card}>
            <Card.Body>
              <Card.Title style={styles.cardTitle}>Statistics</Card.Title>
              <Card.Text style={styles.cardText}>
                View statistics related to your services.
              </Card.Text>
              <Button variant="outline-primary">View Statistics</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ServiceProviderGardeningDashboard;

const styles = {
  heading: {
    textAlign: "center",
    marginBottom: "40px",
    color: "#4CAF50", // Green color for heading
    fontWeight: "bold", // Bold font weight
  },
  card: {
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "box-shadow 0.3s ease",
    height: "100%",
  },
  cardTitle: {
    color: "#333",
    fontSize: "22px",
    marginBottom: "15px",
  },
  cardText: {
    color: "#666",
    fontSize: "16px",
  },
};
