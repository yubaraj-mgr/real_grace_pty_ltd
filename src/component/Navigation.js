import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../App.css'; // Import your custom CSS file

const Navigation = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleDropdownClose = () => {
    setDropdownOpen(false);
  };

  return (
    <Navbar collapseOnSelect expand="lg" className="custom-navbar bg-classic-blue">
      <Container fluid className='mx-3'>
        <Navbar.Brand href="#home">LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/home">HOME</Nav.Link>
            <Nav.Link href="/aboutus">ABOUT US</Nav.Link>
      
            <NavDropdown
              title="SERVICES"
              id="collapsible-nav-dropdown"
              className={`custom-dropdown-animation${isDropdownOpen ? ' open' : ''}`}
              show={isDropdownOpen}
              onClick={handleDropdownToggle}
              onBlur={handleDropdownClose}
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/casestudies">CASE STUDIES</Nav.Link>
            <Nav.Link href="/contactus">CONTACT US</Nav.Link>
          </Nav>
          <Nav className="justify-content-end">
            <div className="phone-number-box">
              <span className="phone-number">
                <span>☏</span> 0414 257 573
              </span>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
