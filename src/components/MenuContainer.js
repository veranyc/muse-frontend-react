 import React from 'react'
 import { Navbar, Nav, NavItem } from 'react-bootstrap'

const navbar = {backgroundColor: '#F16E10'};

export default class Menu extends React.Component {
  render() {
    return (
      <div>
        <Navbar style={navbar}>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">Vera App</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav style={navbar}>
              <NavItem eventKey={1} href="#">Home</NavItem>
              <NavItem eventKey={2} href="#">Profile</NavItem>
              <NavItem eventKey={3} href="#">Events</NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">Login/Logout</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
