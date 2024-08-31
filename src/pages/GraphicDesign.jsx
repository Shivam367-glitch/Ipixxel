import { Card, Col, Container, Row } from "react-bootstrap"
import Contact from "../components/Contact/Contact"
import HeroSection from "../components/Hero/HeroSection"
import DescriptionSection from '../components/DescriptionSection'
import {descriptionList} from "../Utility/description.json";
 

const GraphicDesign = () => {
  const {backgroundImage,heading,paragraphs,imgInfo}=descriptionList[3]

  return (
    <Container fluid={true} className="overflow-hidden">
    <Row> 
        <Col className="col-12 m-0 p-0">
              <HeroSection background="graphicHero.jpg" heading="Graphic" subHeading="Designing" backgroundPosition="right center"/>
        </Col> 
        <Col className="col-12 mx-0 mt-4 px-md-4">
              <h2 className="col-12 col-xl-6  fw-medium fs-1"> How can your business get benefit from Graphic Designing?</h2>
              <Col xs={12} className="m-0 p-0 mt-4"> 
              <Container fluid={true} className="m-0 p-0">
               <Row className="d-flex flex-column flex-md-row gap-0 row-gap-4   overflow-hidden ">
                  <Col xs={12} md={6} className="d-flex flex-column gap-4">  
                    <Card as={Col}  xs={12} className=" border-0 rounded-0 align-items-md-center justify-content-center justify-content-md-start  p-3" style={{backgroundColor:"#dbecff"}}> 
                    <Container fluid={true} className="m-0 p-0">
                      <Row className="d-flex flex-column-reverse flex-lg-row">
                      <Col  className="d-flex flex-column gap-3 align-self-md-end text-center text-lg-start">
                        <h4 className="fw-medium fs-4">Excellent communicator to carry your message</h4>
                        <p className="fw-lighter fs-6">Graphic designs serve as visual ambassadors, bridging communication gaps between businesses and customers, enhancing engagement in our fast-paced world.</p>
                      </Col>
                      <Col  className=" m-0 p-0 text-center ">
                        <img src="excellent-communicator-to-carry-your-message.webp" className="img_graphic" alt=""  />
                      </Col>
  
                      </Row>
                    </Container>
                    </Card>
                    <Card as={Col} xs={12} className="border-0 rounded-0  p-3" style={{backgroundColor:"#ffe9ca"}}>
                    <Container fluid={true} className="m-0 p-0">
                      <Row className="d-flex flex-column-reverse flex-lg-row">
                      <Col className="d-flex flex-column gap-3 align-self-md-end text-center text-lg-start">
                        <h4 className="fw-medium fs-4">Building trust with the first impression</h4>
                        <p className="fw-lighter fs-6">Graphic design and web pages visually convey professionalism and reliability, fostering trust through compelling imagery that speaks volumes about credibility.</p>
                      </Col>
                      <Col className="m-0 p-0 text-center ">
                        <img src="building-trust-with-the-first-impression.webp" alt="" className="img_graphic" />
                      </Col>
                      </Row>
                    </Container>
                    </Card>
                  </Col>  
                 <Col xs={12} md={6} className="align-self-md-center ">  
                  <div style={{backgroundColor:"#ffe5f9"}} className="p-3 text-center ">
                      <img src="logo-a-professional-explainer.webp" className="img_graphic img-fluid" alt="" srcSet="logo-a-professional-explainer.webp 481w,logo-a-professional-explainer-300x257.webp 300w" sizes="(max-width: 481px) 100vw, 481px"/>
                      <h4 className="fw-medium fs-4   text-xl-start">Logo - A professional explainer</h4>
                      <p className="fw-lighter fs-6 mt-4   text-xl-start" >Who wouldn't want their ideas to be presented visually? It begins, naturally, with a logo design. Your business idea might become a reality with just one logo image. A well-designed logo or website provides you a unique identity and successfully communicates the qualities of your business.</p>
                  </div>
                 </Col>
              </Row>
              </Container>
              </Col>  
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

export default GraphicDesign