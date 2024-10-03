import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from '../assets/barterstyle-logo.svg';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm p-3 mb-5 bg-white rounded">
      <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
        <img
          src={logo}
          width="60"
          height="50"
          className="d-inline-block align-top"
          alt="BarterStyle logo"
        />
        <span className="ml-2" style={{ fontFamily: 'Pacifico, cursive', fontSize: '1.5rem', color: '#277f91' }}>
        </span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/" style={{ color: '#343a40', fontWeight: '500' }}>
            Dashboard
          </Nav.Link>
          <Nav.Link as={Link} to="/detail" style={{ color: '#343a40', fontWeight: '500' }}>
            Details
          </Nav.Link>
          <Nav.Link as={Link} to="/weekly" style={{ color: '#343a40', fontWeight: '500' }}>
            Weekly Forecast
          </Nav.Link>
          <Nav.Link as={Link} to="/outfit" style={{ color: '#343a40', fontWeight: '500' }}>
            Outfit Recommendations
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
