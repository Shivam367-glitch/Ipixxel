import { Col, Container, Row } from "react-bootstrap"
import Contact from "../components/Contact/Contact"
import HeroSection from "../components/Hero/HeroSection"
import OrderSection from "../components/Order/OrderSection"
import {serviceList} from "../Utility/service.json"
import DescriptionSection from '../components/DescriptionSection'
import {descriptionList} from "../Utility/description.json";
import TypeSection from "../components/TypeSection"

const DigitalMarketing = () => {
  const {backgroundImage,heading,paragraphs,imgInfo}=descriptionList[5]

  return (
    <Container fluid={true}>
    <Row> 
        <Col className="col-12 m-0 p-0">
          <HeroSection background="digitalHero.jpg" heading="Digital" subHeading="Marketing" backgroundPosition="top center"/>
        </Col> 
        {/* Choose Us Section */} 
        <Col className="m-0 p-0 col-12 col-md-11 mt-4 p-md-4">
          <Container fluid={true}> 
          <Row className="gap-3">
            <Col className="col-8 ">
             <h2 className="fs-1 fw-bold">Result-oriented Digital Marketing company in Bangalore</h2>
            </Col>
            <Col className="col-12">
            <p className="text-dark fs-5">We are a well-known digital marketing agency in Bangalore that is dedicated to advancing the success of your brand online. Our comprehensive solutions address a wide range of digital requirements, enabling your business to set new standards.</p>
            </Col> 
            <Col className="col-12  ">
            <ul className="list-unstyled   d-flex flex-column gap-3">

              <li className="consult_list text-dark fw-normal">Use our knowledge and experience to get the attention of your target audience.</li>
              <li className="consult_list text-dark fw-normal">As a branding agency, we use digital marketing tactics to guarantee worldwide brand resonance and go beyond simple presence.</li>
              <li className="consult_list text-dark fw-normal">Use the internet to leverage traditional marketing constraints and achieve exponential growth.</li>
              <li className="consult_list text-dark fw-normal">Reach a larger audience by working together with others and utilizing innovative strategies.</li>
              <li className="consult_list text-dark fw-normal">Make your brand unstoppable online to propel it to the forefront of the sector.</li>
            </ul>
            </Col>
          </Row>
          </Container>
        </Col>
        <Col className="m-0 p-0 col-12 mt-4 p-md-4">
         <OrderSection heading={"Digital marketing services we offer"}
         paragraph={"Digital marketing solutions have replaced traditional marketing techniques, making them obsolete. Offering these outstanding digital marketing services is what sets us apart as one of Bangalore’s leading digital marketing organizations."}
         card={serviceList[5]["specificService"]}/>
        </Col>
        <Col className="col-12 m-0 p-0  mt-4">
        <DescriptionSection background={backgroundImage} paragraphs={paragraphs} heading={heading} imgInfo={imgInfo}/>
        </Col> 
        <Col className="col-12 m-0 p-0 mt-4 p-md-4"> 
        <TypeSection heading={"Core SEO services from the top SEO agency"} TypeList={serviceList[5]["serviceType"]}/>
      </Col>
        <Col className="col-12 mt-4 p-md-4  wow animate__animated animate__zoomIn">
          <Contact background="Contact.webp" />
        </Col>
    </Row>

    </Container>
  )
}

export default DigitalMarketing