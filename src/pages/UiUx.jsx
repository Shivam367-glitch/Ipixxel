import { Col, Container, Row } from "react-bootstrap"
import Contact from "../components/Contact/Contact"
import HeroSection from "../components/Hero/HeroSection"

 

const UiUx = () => {
  return (
    <Container fluid={true}>
    <Row> 
    <Col className="col-12 m-0 p-0">
          <HeroSection background="uiHero.jpg" heading="UX / UI" subHeading="Design" backgroundPosition="top left"/>
        </Col>
    <Col className="col-12 mt-4 p-md-4  wow animate__animated animate__zoomIn">
          <Contact background="Contact.webp" />
        </Col>
    </Row>

    </Container>
  )
}

export default UiUx