import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import img3 from './images/img3.jpg';

const styles = {
  container: {
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: `url(${img3})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#fff',
    textAlign: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '20px',
    borderBottom: '2px solid #fff',
    paddingBottom: '10px',
  },
  serviceList: {
    listStyleType: 'none',
    padding: '0',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
  },
  serviceItem: {
    marginBottom: '40px',
    padding: '20px',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    borderRadius: '8px',
    background: 'rgba(0, 0, 0, 0.5)',
    width: '300px',
  },
  serviceName: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#fff',
  },
  serviceProvider: {
    fontSize: '1.3rem',
    marginBottom: '10px',
    color: '#fff',
  },
  serviceDescription: {
    fontSize: '1.2rem',
    lineHeight: '1.6',
    marginBottom: '20px',
    color: '#fff',
  },
  locationSelect: {
    marginBottom: '20px',
    fontSize: '1rem',
    padding: '8px 12px',
    border: '1px solid rgba(255, 255, 255, 0.5)',
    borderRadius: '5px',
    outline: 'none',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: '#333',
    width: '200px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    backgroundColor: '#007bff',
    marginRight: '10px',
    marginBottom: '10px',
    outline: 'none',
  },  bookButton: {
    backgroundColor: '#28a745',
  },
  reviewButton: {
    backgroundColor: '#dc3545',
  },
};
function GardeningServices() {
  const [selectedLocation, setSelectedLocation] = useState('Lahore');

  // Function to book gardening service
  const bookGardeningService = () => {
    // Your booking logic here
    alert('Booking gardening service...');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Gardening Services</h1>
      <select
        style={styles.locationSelect}
        value={selectedLocation}
        onChange={(e) => setSelectedLocation(e.target.value)}
      >
        <option value="Lahore">Lahore</option>
        <option value="Gulberg">Gulberg</option>
        <option value="Model Town">Model Town</option>
        <option value="DHA">DHA</option>
      </select>
      <ul style={styles.serviceList}>
        <li style={styles.serviceItem}>
          <h2 style={styles.serviceName}>Garden Design</h2>
          <p style={styles.serviceProvider}>Provider: Green Thumb Landscapes</p>
          <p style={styles.serviceDescription}>Transform your outdoor space with personalized garden designs tailored to your preferences and lifestyle.</p>
          <button style={{ ...styles.button, ...styles.bookButton }} onClick={bookGardeningService}>Book Service</button>
        </li>
        {/* Add more gardening services here */}
      </ul>
    </div>
  );
}

function AgricultureServices() {
  const [selectedLocation, setSelectedLocation] = useState('Lahore');

  // Function to book agriculture service
  const bookAgricultureService = () => {
    // Your booking logic here
    alert('Booking agriculture service...');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Agriculture Services</h1>
      <select
        style={styles.locationSelect}
        value={selectedLocation}
        onChange={(e) => setSelectedLocation(e.target.value)}
      >
        <option value="Lahore">Lahore</option>
        <option value="Gulberg">Gulberg</option>
        <option value="Model Town">Model Town</option>
        <option value="DHA">DHA</option>
      </select>
      <ul style={styles.serviceList}>
        <li style={styles.serviceItem}>
          <h2 style={styles.serviceName}>Soil Testing</h2>
          <p style={styles.serviceProvider}>Provider: AgriLab Solutions</p>
          <p style={styles.serviceDescription}>Ensure optimal crop growth and yield by analyzing your soil's nutrient levels and pH, with recommendations for appropriate fertilizers and soil amendments.</p>
          <button style={{ ...styles.button, ...styles.bookButton }} onClick={bookAgricultureService}>Book Service</button>
        </li>
        {/* Add more agriculture services here */}
      </ul>
    </div>
  );
}

function Services() {
  const { category } = useParams();

  const serviceComponents = {
    gardening: <GardeningServices />,
    agriculture: <AgricultureServices />,
  };

  const selectedService = serviceComponents[category];

  return (
    <div>
      {selectedService || <div>No services found.</div>}
    </div>
  );
}

export default Services;




