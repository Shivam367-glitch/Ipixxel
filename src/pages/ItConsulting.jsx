import { Col, Container, Row } from 'react-bootstrap'
import Contact from '../components/Contact/Contact'
import HeroSection from '../components/Hero/HeroSection'
import OrderSection from '../components/Order/OrderSection'
import {serviceList} from "../Utility/service.json"

const ItConsulting = () => {
  return (
    <Container fluid={true}>
    <Row> 
    <Col className="col-12 m-0 p-0">
          <HeroSection background="ITHero.jpg" heading="IT" subHeading="Consulting" backgroundPosition="center"/>
    </Col>
    <Col className="m-0 p-0 col-12 mt-4 p-md-4">
      <OrderSection heading={"Different UX/UI design services we offer"} card={serviceList[3]["specificService"]}/>
     </Col>
    <Col className="col-12 mt-4 p-md-4  wow animate__animated animate__zoomIn">
          <Contact background="Contact.webp" />
    </Col>
    </Row>

    </Container>
  )
}

export default ItConsulting