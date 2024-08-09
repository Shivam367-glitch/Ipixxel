import { Col, Container, Row } from "react-bootstrap"
import Slider from "../../components/Slider/Slider"
import Contact from "../../components/Contact/Contact"
import Client from "../../components/Clients/Client"
import serviceJson from '../../Utility/service.json'
import ServiceCard from "../../components/ServiceCard"

const Home = () => {

  const {serviceList}=serviceJson;
  return (
    <Container fluid className="m-0 p-0 overflow-hidden">
      <Row className="m-0 p-0 ">
        <Col className="m-0 p-0 col-12">
          <Slider />
        </Col>
 {/* WE OFFER SECTION */} 
  
 <Col className="m-0 p-0 col-12 mt-5 we-offer-container">
       <Container fluid={true} className="m-0 p-0">
        <Row className="m-0 p-0 mx-md-4 d-flex flex-column gap-5 mb-3 mb-lg-5">
          <Col className="d-flex flex-column gap-3 col-12 mt-2">
            <h4 className="org fw-medium">How can we help you</h4>
            <h3 className="display-6 fw-medium">WHAT WE OFFER -</h3>
          </Col>

          <Col className="m-0 p-0 col-12 " >  
          <Container fluid={true} className="m-0 p-0">
              <Row className="m-0 p-0 gap-5 d-flex flex-column flex-lg-row justify-content-lg-center align-items-center"> 
              {
              serviceList.map((service,ind)=>{
                return <ServiceCard key={ind} {...service}/>
              })
              }
              </Row>
          </Container>
          </Col>
        </Row>
       </Container>

       </Col>       


   {/* Solution Section */}
        <Col className="m-0 p-0 col-12 mt-5 overflow-hidden solution_container"> 
        <Container fluid={true} className=" m-0 p-2 p-md-0">
          <Row className="m-0 p-0 d-flex flex-row justify-content-center  justify-content-md-around m-md-4">
          <Col className=" d-flex flex-row justify-content-center align-items-center">
          <img loading="lazy" decoding="async" src="https://ipixxel.com/wp-content/uploads/2024/06/Get-IT-Business-Solutions-for-Your-Projects-with-Our-IT-Consulting-Services.webp" className="" alt="" srcSet="https://ipixxel.com/wp-content/uploads/2024/06/Get-IT-Business-Solutions-for-Your-Projects-with-Our-IT-Consulting-Services.webp 590w, https://ipixxel.com/wp-content/uploads/2024/06/Get-IT-Business-Solutions-for-Your-Projects-with-Our-IT-Consulting-Services-300x222.webp 300w" sizes="(max-width: 590px) 100vw, 590px"/>
           </Col>

         <Col className=" d-flex flex-column align-items-center gap-4 mt-3 mt-md-0">
          <h3 className="display-6 fw-medium">Get IT Solutions For Your Projects</h3>
          <p className="text-secondary fw-normal">We are a boutique software development and digital transformation firm that offers cutting edge technical solutions to Fortune 500 organizations and enterprise clients, assisting them in resolving complicated issues that inevitably arise during their journey toward digital evolution. We have been a trusted software engineering partner and visionary for top-tier brands since 2017.</p>
         </Col>
          </Row>
        </Container>
        </Col>     

        <Col className="m-0 p-0 col-12 mt-5">
          <Client/>
        </Col>


        <Col className="m-0 p-0 col-12 mt-5  wow animate__animated animate__fadeInUp">
         <Contact background="HomeContact.webp"/>
        </Col>
      </Row>
   </Container> 
  )
}

export default Home