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
        <Col xs={12} md={11} className="m-0 p-0  mt-4 p-md-4">
          <Container fluid={true}> 
          <Row className="gap-3">
            <Col xs={12} lg={8} >
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


      {/* Social Media Section */} 
        <Col  xs={12} className="m-0 p-0 p-md-4 mt-4"> 
        <Container fluid={true}>
          <Row className="p-3 p-md-0">
            <Col xs={12} className="m-0 p-0"> 
            <h1 className="fs-1">Social media marketing agency In Bangalore</h1>
            </Col>
            <Col xs={12} className="m-0 p-0 d-md-flex flex-md-row justify-content-md-center  align-items-md-center wow animate__animated animate__zoomIn">
            <img loading="lazy" decoding="async" width="768" height="512" src="social-media-marketing-agency-768x512.webp" alt="" srcSet="social-media-marketing-agency-768x512.webp 768w,social-media-marketing-agency-300x200.webp 300w,social-media-marketing-agency.webp 834w" sizes="(max-width: 768px) 100vw, 768px" className="img-fluid "></img>
            </Col> 
            <Col xs={12} className="m-0  rounded-5 digital_social p-2 p-md-4 text-dark"> 
               <p className="text-dark fs-5">A company can grow in a variety of ways, but social media marketing is one you may not be aware of. Social networking is becoming a constant on everyone’s mind. It is therefore the ideal location for brand promotion. You can sell your ideas to customers however you’d want to with Webomindapps.</p>
                <p className="text-dark fs-5">iPixxel uses social media channels to provide creative services that are tailored to your ideas. Being one of Bangalore’s leading and most successful social media marketing companies, we can do anything you ask for and ultimately provide a high return on investment for your company.</p>
             </Col>
          </Row>
        </Container>
        </Col>

         <Col xs={12} className="m-0 p-0 ps-md-1 pe-md-4 mt-4 py-5 digital_marketing">
         <Container fluid={true}>
          <Row className="gap-3 gap-md-0 p-1">
            <Col xs={12} md={6} className="m-0 p-0"> 
             <img loading="lazy" decoding="async" width="609" height="542" src="social-media-marketing-company.jpg" className="img-fluid" alt="" srcSet="social-media-marketing-company.jpg 609w,social-media-marketing-company-300x267.jpg 300w" sizes="(max-width: 609px) 100vw, 609px"/>
            </Col> 
            <Col xs={12} md={6} className="align-self-center gap-3 d-flex flex-column m-0 p-0">  
            <h1 className="display-5 fw-mediumn">Why is iPixxel the go-to social media marketing company In Bangalore?</h1>
            <p className="text-dark fs-5">Whatever the social media network, we can easily promote your brand on it. iPixxel’s growth has surpassed all previous records due to the client’s success in <span className="text-info">Digital Marketing</span>. Consumers are using social media to interact with our advertised brands at an ever-rising rate. Your integrity, in our opinion, is our integrity. For this reason, we strive to boost your customer’s perception of your authenticity and credibility.</p>
            </Col>
          </Row>
         </Container>
         </Col>


        <Col className="col-12 mt-4 p-md-4  wow animate__animated animate__zoomIn">
          <Contact background="Contact.webp" />
        </Col>
    </Row>

    </Container>
  )
}

export default DigitalMarketing