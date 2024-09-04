import { Container, Button, Nav, Navbar, NavDropdown, Offcanvas } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { useState } from "react";

const Header = () => { 
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  const handleLogoClick = () => {
    navigate('/');
    if(window.innerWidth<992){
    setExpanded(false);
    }
  };

  const handleNavItemClick = () => {
    if(window.innerWidth<992){
      setExpanded(false);
    }
  };

  return (
    <>
        <Navbar key={'lg'} expand={'lg'} expanded={expanded} className="mb-3 py-2 header" fixed="top">
          <Container fluid={true} className="d-lg-flex flex-lg-row justify-content-lg-between align-items-lg-center my-lg-0 p-lg-0 gap-lg-5 mx-md-5">
            <NavLink to="/" onClick={handleLogoClick}>
                <img src="ipixxel-logo.webp" alt="Ipixxel Logo" />
            </NavLink>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${'lg'}`} className="menu" onClick={() => setExpanded(!expanded)} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${'lg'}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${'lg'}`}
              placement="end"
            >
              <Offcanvas.Header closeButton onClick={() => setExpanded(false)} />
              <Offcanvas.Body className="d-lg-flex flex-lg-row justify-content-lg-center align-items-lg-center">
                <Nav className="justify-content-end gap-3 gap-xl-5 flex-grow-1">
                  <NavLink to="/" className="text-decoration-none" onClick={handleNavItemClick}>Home</NavLink>
                  <NavLink to="/about-us" className="text-decoration-none" onClick={handleNavItemClick}>About Us</NavLink>
                  <NavDropdown
                    title="Services"
                    id={`offcanvasNavbarDropdown-expand-lg`}
                    className="full-width-dropdown"
                  >
                    <NavDropdown.Item as={NavLink} to="/web-development" className="text-decoration-none" onClick={handleNavItemClick}>Web Development</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/it-consulting" className="text-decoration-none" onClick={handleNavItemClick}>IT Consulting</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/graphic-designing" className="text-decoration-none" onClick={handleNavItemClick}>Graphic Designing</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/mobile-app-development" className="text-decoration-none" onClick={handleNavItemClick}>Mobile App Development</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/ux-ui-design" className="text-decoration-none" onClick={handleNavItemClick}>UX / UI Design</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to="/digital-marketing" className="text-decoration-none" onClick={handleNavItemClick}>Digital Marketing</NavDropdown.Item>
                  </NavDropdown>
                  <NavLink to="/our-works" className="text-decoration-none" onClick={handleNavItemClick}>Our Works</NavLink>
                  <NavLink to="/blogs" className="text-decoration-none" onClick={handleNavItemClick}>Blogs</NavLink>
                </Nav>
                <NavLink as={Button} to='/contact-us' onClick={handleNavItemClick} className="btn-primary d-flex gap-1 mt-2 mt-lg-0 ms-lg-5">Get in touch <FaArrowRightLong /></NavLink>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </>
  );
};

export default Header;
