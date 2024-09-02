import { Col, Container, Row, Tab, Tabs } from "react-bootstrap"
import Contact from "../components/Contact/Contact"
import HeroSection from "../components/Hero/HeroSection"
import OrderSection from "../components/Order/OrderSection"
import {serviceList} from "../Utility/service.json"
import AppProcessCard from "../components/AppProcessCard"
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
        {/* Trusted section */}
        <Col className="m-0 p-0 col-12 mt-4"> 
        <Container fluid={true}>
          <Row className="d-flex flex-row">
            <Col xs={12} md={5} className="mx-0 px-0 wow animate__animated animate__backInLeft"> 
            <img src="Education.webp" alt="" srcSet="Education.webp 608w,Education-281x300.jpg 281w" sizes="(max-width: 608px) 100vw, 608px" className="img-fluid   "/>
            </Col> 
            <Col xs={12} md={7} className="d-flex flex-column gap-3  align-self-center py-5">  
              <Container fluid={true} className="m-0 p-0">
                <Row className="gap-3">
                  <Col xs={12}> 
                  <h2 className="fs-1 fw-medium">Your Trusted Mobile Application Development Company</h2> 
                  </Col>  
                  <Col xs={12}> 
                       <p className="text-secondary-emphasis">Delivering result-driven software application development services to our diverse clientele spanning all major industries.</p> 
                  </Col> 
                  <Col xs={12} md={12} xl={10} className="app_tab_container"> 
                          <Tabs defaultActiveKey="Education" className="mb-3 border-0 app_tab" fill>
                            <Tab eventKey="Education" title="Education" className="">
                              <h3>Education</h3>
                              <p>We provide e-learning solutions and create websites that interact with teachers, parents, and students on behalf of educational institutions.</p>
                            </Tab>
                            <Tab eventKey="Food" title="Food">
                              <h3>Food</h3>
                              <p>We specialize in creating mouthwatering culinary experiences and interactive platforms that connect chefs, foodies, and diners, revolutionizing the way we engage with food.</p>
                            </Tab>
                            <Tab eventKey="E-commerce" title="E-commerce">
                              <h3>E-commerce</h3>
                              <p>Our expertise lies in developing aesthetically pleasing and intuitive e-commerce platforms that provide efficient online product sales for businesses.</p>
                            </Tab>
                            <Tab eventKey="Marketplaces" title="Marketplaces">
                              <h3>Marketplaces</h3>
                              <p>We’re dedicated to building dynamic online marketplaces that seamlessly connect buyers, sellers, and enthusiasts, fostering a vibrant community-driven ecosystem of commerce and exchange.</p>
                            </Tab>
                            <Tab eventKey="Social" title="Social">
                              <h3 >Social</h3>
                              <p>We specialize in developing engaging social platforms that connect people, ideas, and passions, fostering meaningful connections and conversations in virtual spaces.</p>
                            </Tab>
                           </Tabs>
                  </Col>
                  
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
        </Col> 


        {/* App Development Process Section */} 

        <Col className=" col-12 mt-4 app_process_container" > 
        <Container fluid={true} >
          <Row  className="p-md-4 d-flex flex-column gap-3 my-5">
            <Col className="col-12 m-0 p-0"> 
            <h2 className="text-white">App Development Process</h2>
            </Col> 
            <Col className="col-12 m-0 p-0"> 
            <p className="text-white fs-5">Being a quality-focused Mobile App Development Company, ipixxel guarantees intuitive mobile apps that are performance-oriented and a valuable addition to users’ lives.</p>
            </Col> 
            <Col className="col-12 m-0 p-0"> 
              <Container fluid={true}> 
    <Row className="p-lg-3 gap-5 justify-content-center">
      <AppProcessCard 
        heading="Plan" 
        paragraph="Business evaluation Recording the specs Making wireframes Obtaining consent from the customer" 
        image="plan.webp"
        number="01"
      />
      <AppProcessCard 
        heading="Design"
        paragraph="Creating a prototype for an app Making adjustments Obtaining consent from the customer Putting input into practice"
        image="design.webp"
        number="02"
      /> 
      <AppProcessCard 
        heading="Development" 
        paragraph="Development plan Testing plan creation of products Product introduction"
        image="development.webp"
        number="03"
      />
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

export default AppDev