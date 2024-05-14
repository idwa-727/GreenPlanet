// ServiceProviderGardeningDashboard.js
import React from "react";
import { Card, Button } from 'react-bootstrap';

const ServiceProviderGardeningDashboard = () => {
  return (
    <div>
      <h2>Welcome to Service Provider Gardening Dashboard</h2>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://via.placeholder.com/150" />
        <Card.Body>
          <Card.Title>Recent Orders</Card.Title>
          <Card.Text>
            Check out your recent orders here.
          </Card.Text>
          <Button variant="primary">View Orders</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ServiceProviderGardeningDashboard;
