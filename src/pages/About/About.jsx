import { Col, Container, Row } from "react-bootstrap"
import Contact from "../../components/Contact/Contact"
import HeroSection  from "../../components/Hero/HeroSection"

const About = () => {
  return (
    <Container fluid={true} className="m-0 p-0">
      <Row className="d-flex flex-column m-0  p-0">

      <Col className="col-12 m-0 p-0">
      <HeroSection background="aboutHero.webp" heading="About Us"/>
      </Col>
      <Col className="col-12 mt-4">
      <Contact background="Contact.webp"/>

      </Col>
      </Row>

    </Container>
  )
}

export default About