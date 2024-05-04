import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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
    backgroundColor: '#28a745',
    color: '#fff',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    marginTop: '20px',
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

const SignupPage = () => {
  const [userType, setUserType] = useState('customer');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [serviceType, setServiceType] = useState('');

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleServiceTypeChange = (e) => setServiceType(e.target.value);

  const renderCustomerForm = () => (
    <div>
      <div style={styles.inputGroup}>
        <FaUser style={styles.icon} />
        <input
          style={styles.input}
          type="text"
          placeholder="Customer Username"
          value={username}
          onChange={handleUsernameChange}
          required
        />
      </div>
      <div style={styles.inputGroup}>
        <FaEnvelope style={styles.icon} />
        <input
          style={styles.input}
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </div>
      <div style={styles.inputGroup}>
        <FaLock style={styles.icon} />
        <input
          style={styles.input}
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </div>
    </div>
  );

  const renderAdminForm = () => (
    <div>
      <div style={styles.inputGroup}>
        <FaUser style={styles.icon} />
        <input
          style={styles.input}
          type="text"
          placeholder="Admin Username"
          value={username}
          onChange={handleUsernameChange}
          required
        />
      </div>
      <div style={styles.inputGroup}>
        <FaEnvelope style={styles.icon} />
        <input
          style={styles.input}
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </div>
      <div style={styles.inputGroup}>
        <FaLock style={styles.icon} />
        <input
          style={styles.input}
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </div>
    </div>
  );

  const renderServiceProviderForm = () => (
    <div>
      <div style={styles.inputGroup}>
        <FaUser style={styles.icon} />
        <input
          style={styles.input}
          type="text"
          placeholder="Service Provider Username"
          value={username}
          onChange={handleUsernameChange}
          required
        />
      </div>
      <div style={styles.inputGroup}>
        <FaEnvelope style={styles.icon} />
        <input
          style={styles.input}
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </div>
      <div style={styles.inputGroup}>
        <FaLock style={styles.icon} />
        <input
          style={styles.input}
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </div>
      <div style={styles.inputGroup}>
        <label style={styles.radioLabel}>
          <input
            type="radio"
            name="serviceType"
            value="gardening"
            checked={serviceType === 'gardening'}
            onChange={handleServiceTypeChange}
          />
          Gardening
        </label>
        <label style={styles.radioLabel}>
          <input
            type="radio"
            name="serviceType"
            value="agriculture"
            checked={serviceType === 'agriculture'}
            onChange={handleServiceTypeChange}
          />
          Agriculture
        </label>
      </div>
    </div>
  );

  const renderSignupForm = () => {
    switch (userType) {
      case 'admin':
        return renderAdminForm();
      case 'serviceProvider':
        return renderServiceProviderForm();
      default:
        return renderCustomerForm();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !email || !password || (userType === 'serviceProvider' && !serviceType)) {
      alert('All fields are mandatory!');
      return;
    }
    console.log('Submitted:', { userType, username, email, password, serviceType });
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Signup</h1>
      <form style={styles.form} onSubmit={handleSubmit}>
        <div style={styles.radioGroup}>
          <label style={styles.radioLabel}>
            <input
              type="radio"
              name="userType"
              value="customer"
              checked={userType === 'customer'}
              onChange={() => setUserType('customer')}
            />
            Customer
          </label>
          <label style={styles.radioLabel}>
            <input
              type="radio"
              name="userType"
              value="admin"
              checked={userType === 'admin'}
              onChange={() => setUserType('admin')}
            />
            Admin
          </label>
          <label style={styles.radioLabel}>
            <input
              type="radio"
              name="userType"
              value="serviceProvider"
              checked={userType === 'serviceProvider'}
              onChange={() => setUserType('serviceProvider')}
            />
            Service Provider
          </label>
        </div>
        {renderSignupForm()}
        <button
          style={styles.button}
          type="submit"
          onMouseOver={(e) => (e.target.style.backgroundColor = '#218838')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#28a745')}
        >
          Signup
        </button>
      </form>
      <p style={{ marginTop: '20px' }}>
        Already registered? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
};

export default SignupPage;




