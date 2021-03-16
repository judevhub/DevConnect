import React from 'react';
import { Navbar, Nav,NavDropdown } from 'react-bootstrap';
import welcomelogo from '../../assets/svg/welcome-new.svg';


function NavbarComponent() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">
                <img
                    alt=""
                    src={welcomelogo}
                    width="44"
                    height="44"
                    className="d-inline-block align-top"
                />{' '}
                JU Devhub
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <NavDropdown title="Event Tracks" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/comingsoon">FOSS</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>




    );
}

export default NavbarComponent;