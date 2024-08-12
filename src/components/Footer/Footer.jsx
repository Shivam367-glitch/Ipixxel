import { Container,Row,Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import { FaFacebook,FaLinkedin,FaInstagram,FaEnvelope  } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import {serviceList} from "../../Utility/service.json";
import {contactDetails} from "../../Utility/contactDetails.json";
const Footer = () => {
  
  const {Office_Address,Phone_Number,Email_Address}=contactDetails
  
  return (
    <Container fluid={true} className="footer mt-4 py-3 py-md-5">
      <Row className="mx-md-4">
        <Col className="col-12 col-md-3 d-flex flex-column gap-3 mt-4 mt-md-2">
         <div>
        <img src="ipixxel-logo.webp" alt="Ipixxel Logo" />
         </div>
         <Container className="m-0 p-0">
          <Row>
            <Col className="col-2">
              <Link to="https://www.facebook.com/ipixxelblr" className="icon" target="_blank"><FaFacebook/></Link>
            </Col>
            <Col className="col-2">
              <Link to="https://www.linkedin.com/company/ipixxel/" className="icon" target="_blank"><FaLinkedin/></Link>
            </Col>
            <Col className="col-2">
              <Link to="https://www.instagram.com/ipixxelindia/" className="icon" target="_blank"><FaInstagram /></Link>
            </Col>
          </Row>
         </Container>
         <p className="text-secondary">©{new Date().getFullYear()} <Link to='https://ipixxel.com/' className="text-info text-decoration-none" target="_blank">iPixxel Tech Private Limited</Link>. All Rights Reserved</p>
        </Col>
        <Col className="col-12 col-md-3 d-flex flex-column gap-3 mt-4 mt-md-2">
        <h3 className="text-uppercase">Company</h3>
        <Link to='/about-us' className="text-decoration-none footer-link">About Us</Link>
        <Link to='/contact-us' className="text-decoration-none footer-link">Contact Us</Link>
        </Col>
        <Col className="col-12 col-md-3  d-flex flex-column gap-3 mt-4 mt-md-2">
        <h3 className="text-uppercase">SERVICES</h3>
        {
          serviceList.map((service,ind)=>{
            return(
               <Link to={service.href} className="text-decoration-none footer-link" key={ind}>{service.name}</Link>
            )
          })
        }
        </Col>
        <Col className="col-12 col-md-3 d-flex flex-column gap-3 mt-4 mt-md-2">
        <h3 className="text-uppercase ">CONNECT</h3> 
        <p className="footer-link"><FaLocationDot color="#48BAEB" className="me-2"/>{Office_Address}</p>
        <Link to="tel:+919986512166" className="text-decoration-none footer-link" ><IoCallSharp color="#48BAEB" className="me-2"/>{Phone_Number}</Link>

        <Link to="mailto:info@ipixxel.com" className="text-decoration-none footer-link"><FaEnvelope color="#48BAEB" className="me-2"/>{Email_Address}</Link>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer