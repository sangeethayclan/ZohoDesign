import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import logo from "./Images1/zoho-logo.png"
import bitmap from "./Images1/bitmap-copy.png"
import lady from "./Images1/lady.png"
import msg from "./Images1/msg9.png"
import collab from "./Images1/collab.png"
import msg1 from "./Images1/msg2.png"
import text from "./Images1/phone.png"
import four from "./Images1/four.png"
import five from "./Images1/five.png"
import six from "./Images1/six.png"
import search from "./Images1/search.png"
import './App.css';
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import { Col, Row } from 'react-bootstrap';

function Zoho() {
  return (
    <>
    <div className='header'>
        <Navbar collapseOnSelect expand="md">
    <Container>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="justify-content-center" activeKey="/home">
    <Nav.Item>
      <Nav.Link href="/home" id='abc'>Design</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-1">Workflow</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2">Settings</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-3">
      Download
      </Nav.Link>
    </Nav.Item>
    </Nav><Nav className="me-auto">
    </Nav>
    <Nav className="me-auto" className="justify-content-end">
      <Nav.Link href="#home">Web access</Nav.Link>
      <Nav.Link><img src={bitmap} className="Bitmap-Copy" /></Nav.Link>
    </Nav></Navbar.Collapse>
    </Container>
  </Navbar>
    </div>
    
    <div className='zohocontent'>
    <Navbar>
    <Container>
    <Navbar.Brand href="#home"><img src={logo} className="Bitmap" /></Navbar.Brand>
    <Nav className="me-auto"  id="pricing" className="justify-content-end">
      <Nav.Link href="#home">Pricing</Nav.Link>
      <Nav.Link href="#features">Tour</Nav.Link>
      <Nav.Link href="#pricing">Customers</Nav.Link>
      <Nav.Link href="#features">Solutions</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  <div className='Streamline-your-team'>Streamline your team communication to move work forward</div>
            <div className='Zoho-Cliq-simplifies'>Zoho Cliq simplifies your team communication with organized conversations, information
                 that's easy to find and by connecting to the tools you love.
                </div>
                <div className='center'>
                <div className='accessborder'>
                <p className="Access-cliq">
                    Access cliq
                </p>
                </div>
                </div>
                <div>
                    <img src={lady} className='ladypic' />
                </div>
  </div>

  <Container className='sixg'>
  <Row xs={1} md={3}>
      <Col className='cola'>
          <img src={collab} className='threedot' />
            <div className="Group-collaboration">
              Group collaboration, made simple
            </div>
            <p className='Transform-ideas-into'>Transform ideas into reality with your team. With channels, 
                    your team communication is visible, transparent and efficient.
            </p>
      </Col>
      <Col className='cola'>
        <img src={msg1} className='threedot' />
            <div className="Group-collaboration">
                Searchable conversations
            </div>
             <p className='Transform-ideas-into'>Search for messages, find files shared in a conversation, or 
                look up a user— <span className="bc">find what you're looking for</span>, right when you need it.
            </p>
      </Col>
      <Col className='cola'>
        <img src={text} className='threedot' />
        <div className="Group-collaboration">
            Your team is one tap away
        </div>
        <p className='Transform-ideas-into'>No matter where you're working from or what device you're working on, 
                you can jump onto a <span className="bc">voice or video call</span> and stay connected.
        </p>
      </Col>
      <Col className='cola'>
        <img src={four} className='threedot' />
          <div className="Group-collaboration">
          Never forget a task or meeting
          </div>
          <p className='Transform-ideas-into'>Your <span className="bc">day-to-day tasks</span> and calendar 
          schedules are available right where you collaborate.
          </p>
      </Col>
      <Col className='cola'>
        <img src={five} className='threedot' />
          <div className="Group-collaboration">
          Centralize your workflows
          </div>
          <p className='Transform-ideas-into'>Empower your team communication by collaborating intelligently. 
          <span className="bc">Custom build bots</span> or create command
           shortcuts on the Cliq platform and automate your day-to-day activities.
          </p>
      </Col>
      <Col className='cola'>
        <img src={six} className='threedot' />
          <div className="Group-collaboration">
          Data security
          </div>
          <p className='Transform-ideas-into'>Our top-notch security system, with data encryption and 
          secret chat, is here to make sure your organization data is always safe
          </p>
      </Col>
  </Row>

</Container>
  <div className="Stay-better-connecte">
            Stay better connected with your team 
            and the tools you love!
        </div>
        <div className="Every-business-is-un">
            Every business is unique and so are the tools you use. As your team messaging software, Cliq enables you to integrate your favorite tools to keep work flowing.
        </div>
        <div className="msg">
            <img src={msg} />
        </div>
        <div className='last'>
            <Form className="inputsearches">
                <InputGroup>
                    <Form.Control aria-label="Dollar amount (with dot and two decimal places)"
                         placeholder='Search for Product overviews, FAQ & more…' />
                    <InputGroup.Text><img src={search} /></InputGroup.Text>
                </InputGroup>
                </Form>
        <div className='cent'>
        <div class="Home-Contact-Securit">
            <a href='#'>Home</a><a href='#'>Contact</a><a href='#'>Security</a><a href='#'>IPR Complaints</a>
            <a href='#'>Anti-spam</a>
            <a href='#'>PolicyTerms of Servic</a><a href='#'>Privacy Policy</a>
            <a href='#'>Cookie Policy</a><a href='#'>GDPR Compliance</a>
            <a href='#'>Abuse Policy</a>
        </div>
        </div>
            <div className="All-Rights-R">
                © 2020, All Rights Reserved.
            </div>
        </div>
    </>
  );
}

export default Zoho;
