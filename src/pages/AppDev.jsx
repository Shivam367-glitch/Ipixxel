import { Col, Container, Row } from "react-bootstrap"
import Contact from "../components/Contact/Contact"
import HeroSection from "../components/Hero/HeroSection"
import OrderSection from "../components/Order/OrderSection"
import {serviceList} from "../Utility/service.json"
const AppDev = () => {
  return (
    <Container fluid={true}>
    <Row> 
        <Col className="col-12 m-0 p-0">
          <HeroSection background="AppHero.webp" heading="Mobile App" subHeading="Development" backgroundPosition="top center"/>
        </Col> 
        <Col className="m-0 p-0 col-12 mt-4 p-md-4">
      <OrderSection
       heading={"Mobile App Development Services"} 
       paragraph={"As a custom mobile application development firm, we assist companies with product ideation, converting requirements into usable designs, and crafting state-of-the-art solutions. You can depend on a single organization to supply the product because all of the offers are internal."}
       card={serviceList[1]["specificService"]}/>
     </Col>
        <Col className="col-12 mt-4 p-md-4  wow animate__animated animate__zoomIn">
          <Contact background="Contact.webp" />
        </Col>
    </Row>

    </Container>
  )
}

export default AppDev