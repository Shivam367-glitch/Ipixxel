import { Col, Container, Row } from "react-bootstrap";
import HeroSection from "../../components/Hero/HeroSection";

import Map from "../../components/Map";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <Container fluid className="overflow-hidden">
      <Row className="d-flex flex-column">
        <Col className="col-12 m-0 p-0">
          <HeroSection background="ContactHero.webp" heading="Get" subHeading="In Touch" />
        </Col>

        <Col className="col-12 m-0 p-0 mt-4 px-2 px-md-4">
          <Container fluid={true}>
            <Row>
             <ContactForm/>
            </Row>
          </Container>
        </Col>

       <Map/>
      </Row>
    </Container>
  );
};

export default Contact;
