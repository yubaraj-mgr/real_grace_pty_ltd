import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import '../App.css';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Subscribed with email: ${email}`);
    setEmail('');
  };

  const containerStyle = {
    backgroundColor: 'black',
    color: 'white',
  };

  return (
    <Container fluid className="mx-auto" style={containerStyle}>
      <Row className="justify-content-center">
        <Col xs={12} md={4} className="d-flex flex-column align-items-center mb-4">
          <span style={{ fontWeight: 'bold', color: 'white' }}>About Company</span>
          <span style={{ fontSize: '0.8rem', color: 'white' }}>
            We've turned outsourcing your IT from<br/>
            something that causes massive frustration<br/>
            to a valuable service.
          </span>
        </Col>
        <Col xs={12} md={4} className="d-flex flex-column align-items-center mb-4">
          <span style={{ fontWeight: 'bold', color: 'white' }}>Contacts</span>
          <span style={{ fontSize: '0.8rem', color: 'white' }}>
              Address: 40 Ellesmere Street, Panania, NSW 2213 Australia
              <br />
              Email: info@rextechnologies.com.au
              <br />
              Phone: +61-2-9748-0795 +61-468-752-786
          </span>
        </Col>
        <Col xs={12} md={4} className="d-flex flex-column align-items-center mb-4">
          <span style={{ fontWeight: 'bold', color: 'white' }}>Newsletter</span>
          <span style={{ fontSize: '0.8rem', color: 'white' }}>
            Subscribe to our newsletter<br/>
            to receive updates on the latest news!
          </span>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
