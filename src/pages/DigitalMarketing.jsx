import { Col, Container, Row } from "react-bootstrap"
import Contact from "../components/Contact/Contact"
import HeroSection from "../components/Hero/HeroSection"
import OrderSection from "../components/Order/OrderSection"
import {serviceList} from "../Utility/service.json"
import DescriptionSection from '../components/DescriptionSection'
import {descriptionList} from "../Utility/description.json";

const DigitalMarketing = () => {
  const {backgroundImage,heading,paragraphs,imgInfo}=descriptionList[5]

  return (
    <Container fluid={true}>
    <Row> 
       <Col className="col-12 m-0 p-0">
          <HeroSection background="digitalHero.jpg" heading="Digital" subHeading="Marketing" backgroundPosition="top center"/>
        </Col>
        <Col className="m-0 p-0 col-12 mt-4 p-md-4">
         <OrderSection heading={"Digital marketing services we offer"}
         paragraph={"Digital marketing solutions have replaced traditional marketing techniques, making them obsolete. Offering these outstanding digital marketing services is what sets us apart as one of Bangalore’s leading digital marketing organizations."}
         card={serviceList[5]["specificService"]}/>
        </Col>
        <Col className="col-12 m-0 p-0  mt-4">
      <DescriptionSection background={backgroundImage} paragraphs={paragraphs} heading={heading} imgInfo={imgInfo}/>
      </Col>
        <Col className="col-12 mt-4 p-md-4  wow animate__animated animate__zoomIn">
          <Contact background="Contact.webp" />
        </Col>
    </Row>

    </Container>
  )
}

export default DigitalMarketing