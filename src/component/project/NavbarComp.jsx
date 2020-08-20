import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  Form,
  Input,
  Collapse,
  NavbarToggler,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
// import './css/Style.css';

const NavbarComp = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);


  return (
    <div>
      <Navbar expand="md" style={{ backgroundColor: "#1e3646" }} dark>
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

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret >
                Mahasiswa
              </DropdownToggle>
              <DropdownMenu right >
                <DropdownItem >
                  <NavItem className="item">
                    <NavLink style={{ color: "#000000" }} href="/mahasiswa">Daftar Mahasiswa</NavLink>
                  </NavItem>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <NavItem className="item">
                    <NavLink style={{ color: "#000000" }} href="/krs-mahasiswa">KRS Mahasiswa</NavLink>
                  </NavItem>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <Form >
              <Input type="text" id="exampleEmail" placeholder="Search Anything ..." />
            </Form>
            <Button outline color="warning" className="ml-1">Submit</Button>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarComp
