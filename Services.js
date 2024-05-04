import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import img3 from './images/img3.jpg';

const styles = {
  container: {
    width: '100vw',
    height: '100vh',
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
  },
  bookButton: {
    backgroundColor: '#28a745',
    marginRight: '10px',
  },
  reviewButton: {
    backgroundColor: '#dc3545',
  },
};

function GardeningServices() {
  const [selectedLocation, setSelectedLocation] = useState('Lahore');

  return (
    <div style={styles.container}>
      <h1 style={{ ...styles.title }}>Gardening Services</h1>
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
          <button style={{ ...styles.button, ...styles.bookButton }}>Book Service</button>
          <button style={{ ...styles.button, ...styles.reviewButton }}>Review Service</button>
        </li>
        <li style={styles.serviceItem}>
          <h2 style={styles.serviceName}>Lawn Care</h2>
          <p style={styles.serviceProvider}>Provider: Fresh Green Lawns</p>
          <p style={styles.serviceDescription}>Keep your lawn healthy and lush with professional lawn care services including mowing, fertilizing, and weed control.</p>
          <button style={{ ...styles.button, ...styles.bookButton }}>Book Service</button>
          <button style={{ ...styles.button, ...styles.reviewButton }}>Review Service</button>
        </li>
        <li style={styles.serviceItem}>
          <h2 style={styles.serviceName}>Tree Trimming</h2>
          <p style={styles.serviceProvider}>Provider: Tree Masters</p>
          <p style={styles.serviceDescription}>Maintain the health and aesthetics of your trees with expert tree trimming and pruning services.</p>
          <button style={{ ...styles.button, ...styles.bookButton }}>Book Service</button>
          <button style={{ ...styles.button, ...styles.reviewButton }}>Review Service</button>
        </li>
        <li style={styles.serviceItem}>
          <h2 style={styles.serviceName}>Pest Control</h2>
          <p style={styles.serviceProvider}>Provider: Bug Busters</p>
          <p style={styles.serviceDescription}>Protect your garden from pests and diseases with effective pest control solutions tailored to your specific needs.</p>
          <button style={{ ...styles.button, ...styles.bookButton }}>Book Service</button>
          <button style={{ ...styles.button, ...styles.reviewButton }}>Review Service</button>
        </li>
      </ul>
    </div>
  );
}

function AgricultureServices() {
  const [selectedLocation, setSelectedLocation] = useState('Lahore');

  return (
    <div style={styles.container}>
      <h1 style={{ ...styles.title }}>Agriculture Services</h1>
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
          <button style={{ ...styles.button, ...styles.bookButton }}>Book Service</button>
          <button style={{ ...styles.button, ...styles.reviewButton }}>Review Service</button>
        </li>
        <li style={styles.serviceItem}>
          <h2 style={styles.serviceName}>Crop Consulting</h2>
          <p style={styles.serviceProvider}>Provider: CropCare Consulting</p>
          <p style={styles.serviceDescription}>Maximize your farm's productivity and profitability with expert crop consulting services, including crop selection, planting strategies, and pest management.</p>
          <button style={{ ...styles.button, ...styles.bookButton }}>Book Service</button>
          <button style={{ ...styles.button, ...styles.reviewButton }}>Review Service</button>
        </li>
        <li style={styles.serviceItem}>
          <h2 style={styles.serviceName}>Irrigation Solutions</h2>
          <p style={styles.serviceProvider}>Provider: AquaAgro Solutions</p>
          <p style={styles.serviceDescription}>Optimize water usage and ensure efficient crop growth with customized irrigation solutions tailored to your farm's needs and environmental conditions.</p>
          <button style={{ ...styles.button, ...styles.bookButton }}>Book Service</button>
          <button style={{ ...styles.button, ...styles.reviewButton }}>Review Service</button>
        </li>
        <li style={styles.serviceItem}>
          <h2 style={styles.serviceName}>Harvesting Services</h2>
          <p style={styles.serviceProvider}>Provider: Harvest Helpers</p>
          <p style={styles.serviceDescription}>Efficiently harvest your crops with professional harvesting services to ensure timely and quality harvests.</p>
          <button style={{ ...styles.button, ...styles.bookButton }}>Book Service</button>
          <button style={{ ...styles.button, ...styles.reviewButton }}>Review Service</button>
        </li>
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

  return (
    <div>
      {serviceComponents[category] || <div>No services found.</div>}
    </div>
  );
}

export default Services;


