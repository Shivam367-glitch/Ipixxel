import { Col, Container, Row } from "react-bootstrap"
import Contact from "../components/Contact/Contact"
import HeroSection from "../components/Hero/HeroSection"
import OrderSection from "../components/Order/OrderSection"
import {serviceList} from "../Utility/service.json"
import DescriptionSection from "../components/DescriptionSection"
import {descriptionList} from "../Utility/description.json";
import {tech} from "../Utility/tech.json"
import CountUp from "react-countup/"
import ServiceFlowSection from "../components/ServiceFlowSection"
import TypeSection from "../components/TypeSection"
const WebDev = () => {
  const {backgroundImage,heading,paragraphs,imgInfo}=descriptionList[0]
  return (
    <Container fluid={true}>
    <Row> 
    <Col className="col-12 m-0 p-0">
      <HeroSection background="ContactHero.webp" heading="Web" subHeading="Development" backgroundPosition="right bottom"/>
    </Col>

     <Col className="m-0 p-0 col-12 mt-4 p-md-4">
      <OrderSection heading={"Website design services we offer"} card={serviceList[0]["specificService"]}/>
     </Col> 
     <Col className="col-12 m-0 p-0  mt-4">
      <DescriptionSection background={backgroundImage} paragraphs={paragraphs} heading={heading} imgInfo={imgInfo}/>
      </Col> 

      <Col className="col-12 m-0 p-0 mt-4 p-md-4 overflow-hidden"> 
        <TypeSection heading={"Different Types of Web Design"} TypeList={serviceList[0]["serviceType"]}/>
      </Col>


      <Col className="col-12 m-0 p-0  mt-4"> 
        <ServiceFlowSection heading={"Website Designing Process"} serviceFlow={serviceList[0].serviceFlow} serviceFlowImage={serviceList[0].serviceFlowImage}/>
      </Col> 
      <Col className="col-12 m-0 p-md-4 d-flex flex-column gap-3 mt-4 ">   
      <h2 className="display-5 fw-medium">Technologies in website design</h2> 
      <p className="text-secondary fs-5 ms-2">Our talented web designers are adept at utilizing state-of-the-art technology to provide clients with solutions that are second to none. As a reputable web design firm in Bangalore, we’re dedicated to utilizing cutting-edge technology to give your website a competitive edge.</p>

        <Container fluid={true} >
          <Row className="d-flex flex-column flex-md-row gap-5 justify-content-between">
            <Col className="display-1 btn-group-vertical fw-bolder text-info col-12 col-md-1 m-0 p-0"> 
            <CountUp start={0} end={30}  enableScrollSpy={true} suffix="+"/>
            </Col>

            <Col className="col-12 col-md-6 m-0 p-0 "> 
               <Container>
                <Row>
                {
                  tech.map((techno,ind)=>{
                    return( 
                     <Col key={ind} xs={6} md={3} className="border d-flex flex-row justify-content-center align-items-center p-2">
                      <img    src={techno} alt="" style={{maxWidth:"100%",height:"auto"}} />
                     </Col>
                     
                    )
                  })
                }

                </Row>
               </Container>
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

export default WebDev