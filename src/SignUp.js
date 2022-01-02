import 'bootstrap/dist/css/bootstrap.min.css';
import './Signupcheckstyle.css';
import React from 'react'
import { Button, Col, Container, Form, Nav, Navbar, Row } from 'react-bootstrap';
import logo from './CrmImages/logo.png'
import fb from './CrmImages/facebook.png'
import twit from './CrmImages/twitter.png'
import google from './CrmImages/google.png'


function SignUp() {
  return (
    <>
    <div className='signincontainer'>
    <Navbar  bg="light" variant="dark" className='navsigncon'>
    <Container>
    <Navbar.Brand href="#home">
        <img src={logo} className='crmlogo' />
    </Navbar.Brand>
    <Nav className="me-auto"className="justify-content-end aic">
      <Nav.Link href="#" id="signincolor">Sign In</Nav.Link>
      <Nav.Link href="#"><div className='signborder'>Get Started</div></Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  <div className='asdf'>
      <div className='bgimage'>
      <div class="name">
      Create Account
</div>
<div class="copy-15">
Use your email or other account for sign up
</div>
          <Form>
  <Form.Group className="mb-2" controlId="formPlaintextEmail">
    <Form.Label className='labeltext'>
      Username
    </Form.Label>
    <Col sm="12">
      <Form.Control className='bb' type="text" />
    </Col>
  </Form.Group>
  <Form.Group className="mb-2" controlId="formPlaintextEmail">
    <Form.Label className='labeltext'>
      Email
    </Form.Label>
    <Col sm="12">
      <Form.Control type="email" className='bb' />
    </Col>
  </Form.Group>

  <Form.Group  className="mb-2" controlId="formPlaintextPassword">
    <Form.Label className='labeltext'>
      Password
    </Form.Label>
    <Col sm="12">
      <Form.Control type="password" className='bb' />
    </Col>
  </Form.Group>
</Form>
<div className='checkbutton signupcheck'>
      <Form.Check
        inline
        label="I agree to all the Terms and Conditions"
        name="group1"
        type="checkbox"/>
</div>
<div className='checkbutton'>
<span class="copy-10">
  Already have an account?<span id="-copy-10">Sign In</span>
</span>
<span className='secbuttons'>
    <span class="-copy-8">
  Sign Up
</span></span>
</div>
<div className="copy-9">
  Or
</div>
<div className="fbicons">
    <img src={fb} className='_facebook_icon' />
    <img src={twit} className='_twitter_icon-copy' />
    <img src={google} className='_google_plus_icon' />
</div>
      </div>
  </div>
    </div>
    </>
  );
}

export default SignUp;