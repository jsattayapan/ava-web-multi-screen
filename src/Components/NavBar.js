import BookButton from './BookButton'
import './NavBar.css'
import AvataraLogoWhiteNoName from './../assets/avatara-logo-white-no-name.png'
import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';

function NavBar() {
  return (
    <div className="row nav-bar navbar fixed-top">
      <div className="col-1">
        <img alt="logo" className="logo" src={AvataraLogoWhiteNoName} width='50' />
      </div>
      <div className="col-5 mt-3">
        <ul className="menu-link">
          <li>Home</li>
        <li>Jep's Restaurant</li>
        <li>Activities</li>
        <li>Gallary</li>
        <li>Location</li>
        </ul>
      </div>
      <div className="col-4 d-flex justify-content-end">
        <BookButton />
      </div>
    </div>
  );
}

export default function NMds() {
  return (
    <Navbar variant="dark" style={{background: 'rgba(0,0,0,0.9)'}} fixed="top" expand="lg">
  <Navbar.Brand href="/"><img alt="logo" className="logo" src={AvataraLogoWhiteNoName} width='30' /></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="promotions">Promotions</Nav.Link>
    <Nav.Link href="rooms">Rooms</Nav.Link>
  <Nav.Link href="restaurant">Jep's Restaurant</Nav.Link>
<Nav.Link href="activities">Activities</Nav.Link>
  <Nav.Link href="location">Location</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  <button className="btn btn-outline-light mr-md-3">EN</button>
<button className="btn btn-outline-light mr-md-3">TH</button>
  <BookButton />
</Navbar>

  )
}
