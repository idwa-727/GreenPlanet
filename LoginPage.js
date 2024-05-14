// import React, { useState } from "react";
// import Axios from "axios";
// import { Link, useNavigate } from "react-router-dom";

// const LoginPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("customer");

//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     // Depending on the selected role, construct the login URL
//     let loginURL = "";
//     if (role === "admin") {
//       loginURL = "http://localhost:3000/auth/admin/login";
//     } else {
//       loginURL = "http://localhost:3000/auth/login";
//     }

//     try {
//       const response = await Axios.post(loginURL, {
//         email,
//         password,
//       });
      
//       if (response.status === 200) {
//         // Assuming the server sends a 'message' upon successful login
//         if (response.data.message === 'Login successful') {
//           navigate('/');
//         } else {
//           // Handle invalid login response from the server
//           console.error('Invalid login response:', response.data);
//         }
//       } else {
//         // Handle unexpected status code
//         console.error('Unexpected status code:', response.status);
//       }
//     } catch (error) {
//       console.error('Login error:', error);
//     }
//   };

//   return (
//     <div className="sign-up-container">
//       <form className="sign-up-form" onSubmit={handleSubmit}>
//         <h2>Login</h2>

//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           autoComplete="off"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           placeholder="******"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <label htmlFor="role">Login As:</label>
//         <select value={role} onChange={(e) => setRole(e.target.value)}>
//           <option value="customer">Customer</option>
//           <option value="service_provider_agriculture">Service Provider (Agriculture)</option>
//           <option value="service_provider_gardening">Service Provider (Gardening)</option>
//           <option value="admin">Admin</option>
//         </select>

//         <button type="submit">Login</button>
//         <Link to="/forgotPassword">Forgot Password?</Link>
//         <p>Don't Have an Account? <Link to="/signup">Sign Up</Link></p> 
//       </form>
//     </div>
//   );
// };

// export default LoginPage;
// LoginPage.js
import React, { useState } from 'react';
import Axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('customer');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let loginURL = '';
    if (role === 'admin') {
      loginURL = 'http://localhost:3000/auth/admin/login';
    } else {
      loginURL = 'http://localhost:3000/auth/login';
    }

    try {
      const response = await Axios.post(loginURL, {
        email,
        password,
      });

      if (response.status === 200 && response.data.message === 'Login successful') {
        // Redirect user to the respective dashboard based on role
        switch (role) {
          case 'admin':
            navigate('/dashboard/admin');
            break;
          case 'customer':
            navigate('/dashboard/customer');
            break;
          case 'service_provider_gardening':
            navigate('/dashboard/service-provider/gardening');
            break;
          case 'service_provider_agriculture':
            navigate('/dashboard/service-provider/agriculture');
            break;
          default:
            break;
        }
      } else {
        console.error('Invalid login response:', response.data);
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className="sign-up-container">
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          autoComplete="off"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          placeholder="******"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="role">Login As:</label>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="customer">Customer</option>
          <option value="service_provider_agriculture">Service Provider (Agriculture)</option>
          <option value="service_provider_gardening">Service Provider (Gardening)</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit">Login</button>
        <Link to="/forgot-password">Forgot Password?</Link>
        <p>Don't Have an Account? <Link to="/signup">Sign Up</Link></p> 
      </form>
    </div>
  );
};

export default LoginPage;












