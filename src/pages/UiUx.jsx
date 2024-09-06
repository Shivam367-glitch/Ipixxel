import { Col, Container, Row } from "react-bootstrap"
import Contact from "../components/Contact/Contact"
import HeroSection from "../components/Hero/HeroSection"
import OrderSection from "../components/Order/OrderSection"
import {serviceList} from "../Utility/service.json"
import DescriptionSection from '../components/DescriptionSection'
import {descriptionList} from "../Utility/description.json";
import ServiceFlowSection from "../components/ServiceFlowSection"


const UiUx = () => {
  const {backgroundImage,heading,paragraphs,imgInfo}=descriptionList[4]

  return (
    <Container fluid={true}>
    <Row> 
    <Col className="col-12 m-0 p-0">
          <HeroSection background="uiHero.jpg" heading="UX / UI" subHeading="Design" backgroundPosition="top left"/>
    </Col> 
    <Col className="m-0 p-0 col-12 mt-4 p-md-4">
      <OrderSection heading={"Different UX/UI design services we offer"} card={serviceList[2]["specificService"]}/>
     </Col>
     <Col className="col-12 m-0 p-0  mt-4">
      <DescriptionSection background={backgroundImage} paragraphs={paragraphs} heading={heading} imgInfo={imgInfo}/>
      </Col>
      <Col className="col-12 m-0 p-0  mt-4"> 
        <ServiceFlowSection heading={"How do we process UI/UX designing in iPixxel?"} serviceFlow={serviceList[2].serviceFlow} serviceFlowImage={serviceList[2].serviceFlowImage}/>
      </Col> 
      <Col className="col-12 mt-4 p-md-4  wow animate__animated animate__zoomIn">
          <Contact background="Contact.webp" />
        </Col>
    </Row>

    </Container>
  )
}

export default UiUx