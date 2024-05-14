import React from "react";

const CustomerDashboard = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Welcome to Customer Dashboard</h2>
      <div style={styles.content}>
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Your Orders</h3>
          <p style={styles.cardText}>View and track your orders</p>
        </div>
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Account Settings</h3>
          <p style={styles.cardText}>Manage your account information</p>
        </div>
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Support</h3>
          <p style={styles.cardText}>Get help and support</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;

const styles = {
  container: {
    background: "#f8f9fa",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    margin: "20px auto",
    maxWidth: "800px",
  },
  heading: {
    color: "#333",
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "24px",
  },
  content: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    width: "30%",
    textAlign: "center",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  cardTitle: {
    color: "#333",
    fontSize: "20px",
    marginBottom: "10px",
  },
  cardText: {
    color: "#666",
  },
};
