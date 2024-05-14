// import React, { useState } from "react";
// import "./SignupPage.css";
// import Axios from "axios";
// import { Link, useNavigate } from "react-router-dom";

// const SignupPage = () => {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("customer"); // Default role is customer

//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     Axios.post("http://localhost:3000/auth/signup", {
//       username,
//       email,
//       password,
//       role
//     }).then(response => {
//         if(response.data.message === 'User registered successfully') {
//             navigate('/login');
//         }
//     }).catch(err => {
//         console.log(err)
//     });
//   };

//   return (
//     <div className="sign-up-container">
//       <form className="sign-up-form" onSubmit={handleSubmit}>
//         <h2>Sign Up</h2>
//         <label htmlFor="username">Username:</label>
//         <input
//           type="text"
//           placeholder="Username"
//           onChange={(e) => setUsername(e.target.value)}
//         />

//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           autoComplete="off"
//           placeholder="Email"
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           placeholder="******"
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         {/* Role selection */}
//         <label htmlFor="role">Sign Up As:</label>
//         <select value={role} onChange={(e) => setRole(e.target.value)}>
//           <option value="customer">Customer</option>
//           <option value="service_provider_gardening">Service Provider (Gardening)</option>
//           <option value="service_provider_agriculture">Service Provider (Agriculture)</option>
//           <option value="admin">Admin</option>
//         </select>

//         <button type="submit">Sign Up</button>
//         <p>Have an Account? <Link to="/login">Login</Link></p> 
//       </form>
//     </div>
//   );
// };

// export default SignupPage;
import React, { useState } from "react";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import './SignupPage.css'

const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("customer");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.post("http://localhost:3000/auth/signup", {
        username,
        email,
        password,
        role
      });
      if (response.status === 201) {
        navigate('/login');
      }
    } catch (error) {
      console.error('Signup error:', error);
      // Handle specific error cases, e.g., display error message to the user
    }
  };

  return (
    <div className="sign-up-container">
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
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

        <label htmlFor="role">Sign Up As:</label>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="customer">Customer</option>
          <option value="service_provider_gardening">Service Provider (Gardening)</option>
          <option value="service_provider_agriculture">Service Provider (Agriculture)</option>
          <option value="admin">Admin</option>
        </select>

        <button type="submit">Sign Up</button>
        <p>Have an Account? <Link to="/login">Login</Link></p>
      </form>
    </div>
  );
};

export default SignupPage;






