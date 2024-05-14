import React from "react";

const AdminDashboard = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Welcome to Admin Dashboard</h2>
      <ul style={styles.list}>
        <li style={styles.listItem}>Manage users</li>
        <li style={styles.listItem}>View statistics</li>
        <li style={styles.listItem}>Create or update content</li>
        {/* Add more functionality as needed */}
      </ul>
    </div>
  );
};

export default AdminDashboard;

const styles = {
  container: {
    background: "#f8f9fa",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    margin: "20px auto",
    maxWidth: "600px",
  },
  heading: {
    color: "#333",
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "24px",
  },
  list: {
    listStyleType: "none",
    padding: 0,
  },
  listItem: {
    background: "#fff",
    padding: "10px",
    borderRadius: "5px",
    marginBottom: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    cursor: "pointer",
    transition: "background 0.3s ease",
  },
};


