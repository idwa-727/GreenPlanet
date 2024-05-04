// ContactUs.js
import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; // Importing icons from react-icons library

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '40px 20px',
    fontFamily: 'Arial, sans-serif',
   // Add your background image path here
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '2.5rem',
    color: '#28a745',
    marginBottom: '30px',
    borderBottom: '3px solid #28a745',
    paddingBottom: '15px',
    textAlign: 'center',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
  },
  contactInfo: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },
  icon: {
    marginRight: '15px',
    fontSize: '1.5rem',
    color: '#28a745',
  },
  text: {
    fontSize: '1.2rem',
    color: '#555',
  },
};

function ContactUs() {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Contact Us</h2>
      <div style={styles.contactInfo}>
        <FaPhone style={styles.icon} />
        <p style={styles.text}>Call us at: <strong>+92 123 456789</strong></p>
      </div>
      <div style={styles.contactInfo}>
        <FaEnvelope style={styles.icon} />
        <p style={styles.text}>Email us at: <strong>example@email.com</strong></p>
      </div>
      <div style={styles.contactInfo}>
        <FaMapMarkerAlt style={styles.icon} />
        <p style={styles.text}>Visit us at: <strong>Lahore, Pakistan</strong></p>
      </div>
    </div>
  );
}

export default ContactUs;

