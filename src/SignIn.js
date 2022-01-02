import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './Signinstyle.css'
import React from 'react'
import { Button, Col, Container, Form, Nav, Navbar, Row } from 'react-bootstrap';
import logo from './CrmImages/logo.png'
import fb from './CrmImages/facebook.png'
import twit from './CrmImages/twitter.png'
import google from './CrmImages/google.png'


function SignIn() {
  return (
    <>
    <div className='signincontainer'>
    <Navbar  bg="light" variant="dark" className='navsigncon'>
    <Container>
    <Navbar.Brand href="#home">
        <img src={logo} className='crmlogo' />
    </Navbar.Brand>
    <Nav className="me-auto"className="justify-content-end" className="aic">
      <Nav.Link href="#" id="signincolor">Sign In</Nav.Link>
      <Nav.Link href="#"><div className='signborder'>Get Started</div></Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  <div className='asdf'>
      <div className='bgimage'>
      <div class="name">
  Sign In
</div>
<div class="copy-15">
  Welcome! Let’s get started!
</div>
          <Form>
  <Form.Group className="mb-3" controlId="formPlaintextEmail">
    <Form.Label className='labeltext'>
      Email
    </Form.Label>
    <Col sm="12">
      <Form.Control type="email" className='bb' />
    </Col>
  </Form.Group>

  <Form.Group  className="mb-3" controlId="formPlaintextPassword">
    <Form.Label className='labeltext'>
      Password
    </Form.Label>
    <Col sm="12">
      <Form.Control type="password" fullwidth className='bb' />
    </Col>
  </Form.Group>
</Form>
<div className='checkbutton'>
      <div className='rememberme'>
      <Form.Check
        inline
        label="Remember Me"
        name="group1"
        type="checkbox"/>
      </div>
        <div class="secbutton">
          <span class="-copy-8">
            Sign In
          </span>
        </div>
</div>
<div className='checkbutton'>
<span class="-copy-10 Text-Style-5">
  Sign Up Now
</span>
<span class="-copy-7">
  Forget Password?
</span>
</div>
<div className='checkbutton'>
  <div className='line'></div>
<div className="copy-9">
  Or
</div>
  <div className='line'></div>
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

export default SignIn;