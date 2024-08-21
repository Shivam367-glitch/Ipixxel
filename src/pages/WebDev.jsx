import { Col, Container, Row } from "react-bootstrap"
import Contact from "../components/Contact/Contact"
import HeroSection from "../components/Hero/HeroSection"
import OrderSection from "../components/Order/OrderSection"
import {serviceList} from "../Utility/service.json"
const WebDev = () => {
  return (
    <Container fluid={true}>
    <Row> 
    <Col className="col-12 m-0 p-0">
      <HeroSection background="ContactHero.webp" heading="Web" subHeading="Development" backgroundPosition="right bottom"/>
    </Col>

     <Col className="m-0 p-0 col-12 mt-4 p-md-4">
      <OrderSection heading={"Website design services we offer"} card={serviceList[0]["specificService"]}/>
     </Col>
    <Col className="col-12 mt-4 p-md-4  wow animate__animated animate__zoomIn">
          <Contact background="Contact.webp" />
    </Col>
    </Row>

    </Container>
  )
}

export default WebDev