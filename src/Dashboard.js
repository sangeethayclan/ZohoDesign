import React from 'react'
import { Col, Container, Nav, Navbar, Row, Tab } from 'react-bootstrap';
import logo from './CrmImages/logo.png'
import shape from './CrmImages/shape.png'
import insight from './CrmImages/insight.png'
import groupicon from './CrmImages/group-icon.png'
import dash1 from './CrmImages/dash1.png'
import dash2 from './CrmImages/dash2.png'
import './Dashstyle.css'
import profile from './CrmImages/profile-icon.png'

function Dashboard() {
  return (
    <>
    <Navbar  bg="light" variant="dark" className='navsigncon'>
    <Container>
    <Navbar.Brand href="#home">
        <img src={logo} className='crmlogo' />
    </Navbar.Brand>
    <Nav className="me-auto"className="justify-content-end" style={{alignItems:'center'}}>
      <Nav.Link href="#" id="Plots">Plots</Nav.Link>
      <Nav.Link href="#"><div className='Add-Lead-border'>
      <span className='Add-Lead'>Add Lead</span></div></Nav.Link>
      <Nav.Link href="#" id="pro">
          <div>
              <img src={profile} className='profile_icon' />
          </div>
          <div>
        <p class="Richard">
            Richard
        </p> 
        <p class="Lead-Creator">
            Lead Creator
        </p>
        </div>
      </Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  <div>
  <Tab.Container id="left-tabs-example" defaultActiveKey="second">
  <Row>
    <Col sm={3}>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="first"><img src={shape} className='dashboardimg'/>Dashboard</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second"><img src={insight} className='insight'/>Insights</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="third"><img src={groupicon} className='dashboardimg'/>Leads</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
        <Tab.Pane eventKey="first">
        </Tab.Pane>
        <Tab.Pane eventKey="second">
            <div className='dashboardbg'>
                <div>
                    <img src={dash1} className='dash1' />
                    <img src={dash2} className='dash2' />
                </div>
            </div>
        </Tab.Pane>
        <Tab.Pane eventKey="third">
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
  </div>
    </>
  );
}

export default Dashboard; 