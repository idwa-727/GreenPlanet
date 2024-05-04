import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';

const styles = {
  container: {
    maxWidth: '800px',
    margin: '50px auto',
    padding: '40px',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '30px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  inputGroup: {
    marginBottom: '20px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #ccc',
    borderRadius: '6px',
    paddingLeft: '15px',
  },
  input: {
    flex: '1',
    padding: '15px',
    fontSize: '1rem',
    border: 'none',
    outline: 'none',
    backgroundColor: '#fff',
  },
  icon: {
    marginRight: '15px',
    fontSize: '1.2rem',
    color: '#555',
  },
  button: {
    padding: '12px 24px',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '6px',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  radioGroup: {
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioLabel: {
    margin: '0 10px',
    fontSize: '1rem',
    color: '#333',
  },
};

const LoginPage = () => {
  const [userType, setUserType] = useState('customer');

  const handleUserTypeChange = (type) => {
    setUserType(type);
  };

  const renderCustomerFields = () => (
    <>
      <div style={styles.inputGroup}>
        <FaUser style={styles.icon} />
        <input
          style={styles.input}
          type="email"
          placeholder="Email"
          required
        />
      </div>
      <div style={styles.inputGroup}>
        <FaLock style={styles.icon} />
        <input
          style={styles.input}
          type="password"
          placeholder="Password"
          required
        />
      </div>
    </>
  );

  const renderAdminFields = () => (
    <>
      <div style={styles.inputGroup}>
        <FaUser style={styles.icon} />
        <input
          style={styles.input}
          type="email"
          placeholder="Admin Email"
          required
        />
      </div>
      <div style={styles.inputGroup}>
        <FaLock style={styles.icon} />
        <input
          style={styles.input}
          type="password"
          placeholder="Admin Password"
          required
        />
      </div>
    </>
  );

  const renderServiceProviderFields = () => (
    <>
      <div style={styles.inputGroup}>
        <FaUser style={styles.icon} />
        <input
          style={styles.input}
          type="email"
          placeholder="Service Provider Email"
          required
        />
      </div>
      <div style={styles.inputGroup}>
        <FaLock style={styles.icon} />
        <input
          style={styles.input}
          type="password"
          placeholder="Service Provider Password"
          required
        />
      </div>
      <div style={styles.inputGroup}>
        <label style={{ marginRight: '10px' }}>Domain:</label>
        <select style={styles.input} required>
          <option value="">Select Domain</option>
          <option value="gardening">Gardening</option>
          <option value="agriculture">Agriculture</option>
        </select>
      </div>
    </>
  );

  const renderFieldsByUserType = () => {
    switch (userType) {
      case 'admin':
        return renderAdminFields();
      case 'serviceProvider':
        return renderServiceProviderFields();
      default:
        return renderCustomerFields();
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Login</h1>
      <form style={styles.form}>
        <div style={styles.radioGroup}>
          <label style={styles.radioLabel}>
            <input
              type="radio"
              name="userType"
              value="customer"
              checked={userType === 'customer'}
              onChange={() => handleUserTypeChange('customer')}
            />
            Customer
          </label>
          <label style={styles.radioLabel}>
            <input
              type="radio"
              name="userType"
              value="admin"
              checked={userType === 'admin'}
              onChange={() => handleUserTypeChange('admin')}
            />
            Admin
          </label>
          <label style={styles.radioLabel}>
            <input
              type="radio"
              name="userType"
              value="serviceProvider"
              checked={userType === 'serviceProvider'}
              onChange={() => handleUserTypeChange('serviceProvider')}
            />
            Service Provider
          </label>
        </div>
        {renderFieldsByUserType()}
        <button
          style={styles.button}
          type="submit"
          onMouseOver={(e) => (e.target.style.backgroundColor = '#0056b3')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#007bff')}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;

