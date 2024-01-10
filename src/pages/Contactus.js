import React from 'react'
import Mainlayout from "../component/Mainlayout"
import Info from '../component/Info'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../App.css"
const Contactus = () => {
  return (
    <div>
        <Mainlayout>
          <Info name="Contact Us"/>
      <Container className='container-width'>
      {/* First Row */}
      <Row className="justify-content-start align-items-center">
        <Col>1 of 3</Col>
        <Col className="text-center">2 of 3</Col>
        <Col className="text-end">3 of 3</Col>
      </Row>

      {/* Second Row */}
      <Row className="justify-content-between align-items-top">
        <Col>1 of 3</Col>
        <Col className="text-center">2 of 3</Col>
        <Col className="text-end">3 of 3</Col>
      </Row>

      <Row className='mt-5'>
        <Col><h1>Write us any message</h1></Col>
      </Row>

      <Form className='mt-3'>
      <Row>
        <Col>
          <Form.Control placeholder="Name" />
        </Col>
        <Col>
          <Form.Control placeholder="Email" />
        </Col>
      </Row>
      <Row className='mt-4'>
        <Col>
          <Form.Control placeholder="Contact Number" />
        </Col>
        <Col>
          <Form.Control placeholder="Subject" />
        </Col>
      </Row>
      <Row className='mt-4'>
        <Col className='message'>
          <Form.Control as="textarea" placeholder='Message' rows={5}/>
        </Col>
      </Row>
      <Button className='mt-2' variant="primary" type="submit">
        Send Message
      </Button>
    </Form>
    </Container>
      </Mainlayout>
    </div>
  )
}

export default Contactus
