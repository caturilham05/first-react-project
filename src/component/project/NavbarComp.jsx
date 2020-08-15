import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button, Form, Input, Collapse, NavbarToggler
} from 'reactstrap';
import './css/Style.css';

const NavbarComp = (props) => {
  const[isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);


  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/" className="navbar__logo ml-5">Sekolah-React</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto mr-5" navbar>
          <NavItem className="item">
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem className="item">
            <NavLink href="/about">About</NavLink>
          </NavItem>
          <NavItem className="item">
            <NavLink href="/mahasiswa">Mahasiswa</NavLink>
          </NavItem>
          <Form>
             <Input type="text" id="exampleEmail" placeholder="Search Anything ..." />
            </Form>
            <Button outline color="warning" className="tombol">Submit</Button>
        </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarComp
