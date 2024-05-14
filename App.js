// import React from 'react';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import CarouselPages from './components/CarouselPages';
// import ContactUs from './components/ContactUs';
// import AboutUs from './components/AboutUs';
// import Products from './components/Products';
// import Services from './components/Services';
// import LoginPage from './components/LoginPage';
// import SignupPage from './components/SignupPage';
// import AdminDashboard from './components/AdminDashboard';
// import ForgotPassword from './components/ForgotPassword';
// import CustomerDashboard from './components/CustomerDashboard';
// import ServiceProviderAgricultureDashboard from './components/ServiceProviderAgricultureDashboard';
// import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
// import { Nav, Navbar, NavDropdown, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
// import { Cart } from 'react-bootstrap-icons'; // Import the cart icon
// import ServiceProviderGardeningDashboard from './components/ServiceProviderGardeningDashboard';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Navbar bg='success' variant='dark' sticky='top' expand="lg">
//           <Navbar.Brand as={NavLink} to="/">
//             <b>GreenPlanet</b>
//           </Navbar.Brand>
//           <Navbar.Toggle />
//           <Navbar.Collapse>
//             <Nav>
//               <Nav.Link as={NavLink} to="/contact-us">Contact Us</Nav.Link>
//               <Nav.Link as={NavLink} to="/about-us">About Us</Nav.Link>

//               <NavDropdown title="Products">
//                 <NavDropdown.Item as={NavLink} to="/products/plants">Plants</NavDropdown.Item>
//                 <NavDropdown.Item as={NavLink} to="/products/pots">Pots</NavDropdown.Item>
//                 <NavDropdown.Item as={NavLink} to="/products/fertilizers">Fertilizers</NavDropdown.Item>
//                 <NavDropdown.Item as={NavLink} to="/products/tools">Tools</NavDropdown.Item>
//               </NavDropdown>

//               <NavDropdown title="Services">
//                 <NavDropdown.Item as={NavLink} to="/services/gardening">Gardening</NavDropdown.Item>
//                 <NavDropdown.Item as={NavLink} to="/services/agriculture">Agriculture</NavDropdown.Item>
//               </NavDropdown>

//               <Nav className="align-items-center">
//                 <Button variant="outline-light" as={NavLink} to="/login" className="me-2">Login</Button>
//                 <Button variant="light" as={NavLink} to="/signup">Signup</Button>
                
//                 {/* Add to Cart icon */}
//                 <OverlayTrigger
//                   placement="bottom"
//                   overlay={<Tooltip>Add to Cart</Tooltip>}
//                 >
//                   <Button variant="light" className="ms-2">
//                     <Cart size={20} />
//                   </Button>
//                 </OverlayTrigger>
//               </Nav>
//             </Nav>
//           </Navbar.Collapse>
//         </Navbar>

//         <Routes>
//           <Route path="/contact-us" element={<ContactUs />} />
//           <Route path="/about-us" element={<AboutUs />} />
//           <Route path="/products/:category" element={<Products />} />
//           <Route path="/services/:category" element={<Services />} />
//           <Route path="/login" element={<LoginPage />} /> 
//           <Route path="/signup" element={<SignupPage />} /> 
//           <Route path="/" element={<CarouselPages />} />
//           <Route path="/forgot-password" element={<ForgotPassword />} />
//           <Route path="/admin-dashboard" element={<AdminDashboard />} />
//           <Route path="/customer-dashboard" element={<CustomerDashboard />} />
//           <Route path="/serviceprovidergardening-dashboard" element={<ServiceProviderGardeningDashboard />} />
//           <Route path="/serviceprovideragriculture-dashboard" element={<ServiceProviderAgricultureDashboard />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselPages from './components/CarouselPages';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import Products from './components/Products';
import Services from './components/Services';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import AdminDashboard from './components/AdminDashboard';
import ForgotPassword from './components/ForgotPassword';
import CustomerDashboard from './components/CustomerDashboard';
import ServiceProviderAgricultureDashboard from './components/ServiceProviderAgricultureDashboard';
import ServiceProviderGardeningDashboard from './components/ServiceProviderGardeningDashboard';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { Nav, Navbar, NavDropdown, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Cart } from 'react-bootstrap-icons'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar bg='success' variant='dark' sticky='top' expand="lg">
          <Navbar.Brand as={NavLink} to="/">
            <b>GreenPlanet</b>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav>
              <Nav.Link as={NavLink} to="/contact-us">Contact Us</Nav.Link>
              <Nav.Link as={NavLink} to="/about-us">About Us</Nav.Link>

              <NavDropdown title="Products">
                <NavDropdown.Item as={NavLink} to="/products/plants">Plants</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/products/pots">Pots</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/products/fertilizers">Fertilizers</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/products/tools">Tools</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Services">
                <NavDropdown.Item as={NavLink} to="/services/gardening">Gardening</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/services/agriculture">Agriculture</NavDropdown.Item>
              </NavDropdown>

              <Nav className="align-items-center">
                <Button variant="outline-light" as={NavLink} to="/login" className="me-2">Login</Button>
                <Button variant="light" as={NavLink} to="/signup">Signup</Button>
                
                <OverlayTrigger
                  placement="bottom"
                  overlay={<Tooltip>Add to Cart</Tooltip>}
                >
                  <Button variant="light" className="ms-2">
                    <Cart size={20} />
                  </Button>
                </OverlayTrigger>
              </Nav>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Routes>
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/products/:category" element={<Products />} />
          <Route path="/services/:category" element={<Services />} />
          <Route path="/login" element={<LoginPage />} /> 
          <Route path="/signup" element={<SignupPage />} /> 
          <Route path="/" element={<CarouselPages />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          {/* <Route path="/dashboard/admin" element={<AdminDashboard />} /> */}
          <Route path="/dashboard/admin" element={<AdminDashboard />} />
          <Route path="/dashboard/customer" element={<CustomerDashboard />} />
          <Route path="/dashboard/service-provider/gardening" element={<ServiceProviderGardeningDashboard />} />
          <Route path="/dashboard/service-provider/agriculture" element={<ServiceProviderAgricultureDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
