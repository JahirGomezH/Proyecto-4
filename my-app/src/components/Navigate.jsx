import React from 'react'
import {Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import '../index.css'

const Navigate = () => {
return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <img
        src="https://scontent.fmex2-1.fna.fbcdn.net/v/t1.6435-9/121053498_736585677200883_6702322110652267343_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHoW-n7lLi0S1SeAv3kTpUcaUb6-BoL7appRvr4Ggvtqpbr70fLpjbsyp8TbDbLP6TW-23PVODCcgcV0FF8EMi3&_nc_ohc=ApBbnIKYtbgAX_HdPU9&_nc_ht=scontent.fmex2-1.fna&oh=00_AT_2ZCIrw0Cb2VnO6NZ1N852IaiIZQdDvVWAk2Od_Cp6KA&oe=62C013E3"
        width="65"
        height="65"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
        id='LogoR'
    />
    <Container>
    <Navbar.Brand href="#home">Le ratatouille</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
        <Nav.Link href="#features">Menu</Nav.Link>
        <Nav.Link href="#pricing">Schedule</Nav.Link>
        <NavDropdown title="About Us" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
    </Nav>
    <Nav>
        <Nav.Link href="#deets">Gallery</Nav.Link>
        <Nav.Link eventKey={2} href="#memes">
        News
        </Nav.Link>
    </Nav>
    </Navbar.Collapse>
    </Container>
</Navbar>
)
}

export default Navigate