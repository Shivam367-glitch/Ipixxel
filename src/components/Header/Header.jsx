import { Container,Button, Nav, Navbar, NavDropdown, Offcanvas } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { FaArrowRightLong } from "react-icons/fa6";

const Header = () => {
  return (
    <>
        <Navbar key={'lg'} expand={'lg'} className="mb-3 py-3 header" fixed="top">
          <Container fluid={true} className="d-lg-flex flex-lg-row justify-content-lg-between align-items-lg-center my-lg-0 p-lg-0 gap-lg-5 mx-md-5">
            <NavLink to="/">
                <img src="ipixxel-logo.webp" alt="Ipixxel Logo" />
            </NavLink>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${'lg'}`} className="menu"/>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${'lg'}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${'lg'}`}
              placement="end"
            >
              <Offcanvas.Header closeButton/>
              <Offcanvas.Body className="d-lg-flex flex-lg-row justify-content-lg-center align-items-lg-center">
              <Nav className="justify-content-end gap-3 gap-lg-5 flex-grow-1">
              <NavLink to="/" className="text-decoration-none">Home</NavLink>
              <NavLink to="/about-us" className="text-decoration-none">About Us</NavLink>
              <NavDropdown
                title="Services"
                id={`offcanvasNavbarDropdown-expand-lg`}
                className="full-width-dropdown"
              >
                <NavDropdown.Item as={NavLink} to="/web-development" className="text-decoration-none">Web Development</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/it-consulting" className="text-decoration-none">IT Consulting</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/graphic-designing" className="text-decoration-none">Graphic Designing</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/mobile-app-development" className="text-decoration-none">Mobile App Development</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/ux-ui-design" className="text-decoration-none">UX / UI Design</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/digital-marketing" className="text-decoration-none">Digital Marketing</NavDropdown.Item>
              </NavDropdown>
              <NavLink to="/our-works" className="text-decoration-none">Our Works</NavLink>
              <NavLink to="/blogs" className="text-decoration-none">Blogs</NavLink>
              </Nav>
              <NavLink as={Button} to='/contact-us' className="btn-primary d-flex gap-1 mt-2 mt-lg-0 ms-lg-5">Get in touch <FaArrowRightLong /></NavLink>
              </Offcanvas.Body>
            </Navbar.Offcanvas>

          </Container>
        </Navbar>
    </>
  )
}

export default Header