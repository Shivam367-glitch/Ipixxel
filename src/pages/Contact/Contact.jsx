import { Col, Container, Row } from "react-bootstrap"
import HeroSection from "../../components/Hero/HeroSection"
import {contactDetails} from "../../Utility/contactDetails.json"
import { FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { PiMapPinLineThin } from "react-icons/pi";


const Contact = () => {

  return (
    <Container fluid={true} className="overflow-hidden">
      <Row className="d-flex flex-column">
        <Col className="col-12 m-0 p-0">
          <HeroSection background="ContactHero.webp" heading="Get" subHeading="In Touch" />
        </Col>


        <Col className="col-12 m-0 p-0 mt-4 px-2 px-md-4 bg-black text-white">
        <Container>
            <Row>
                <Col className="col-12 col-md-6 m-0 p-0">
                    <span>Send Us Message</span>
                    <pre>Don’t Hesitate To Contact Us
                    Say Hello Or Message</pre>
                    <div className=" border border-success">
                        {
                           Object.entries(contactDetails).forEach(([key, value]) => {
                          if(key==="Phone_Number"){
                                return <div className="d-flex flex-column flex-md-row">
                                    <FaPhoneVolume/>
                                </div>
                          }else if(key==="Email_Address"){
                                return <div className="d-flex flex-column flex-md-row">
                                        <MdOutlineMarkEmailRead/>
                                </div> 
                          }else{
                                return <div className="d-flex flex-column flex-md-row">
                                       <PiMapPinLineThin/>
                                </div> 
                      }
                          })
                        }

                    </div>


                </Col>

                <Col className="col-12 col-md-6 m-0 p-0"></Col>
            </Row>
        </Container>
        </Col>

        <Col className="col-12 m-0 p-0 mt-4 px-2 px-md-4">
        <iframe   allowFullScreen="" loading="lazy" src='https://www.google.com/maps/embed?origin=mfe&pb=!1m4!2m1!1sArdent+Office+One,+Hoodi+Main+Rd+Hoodi,++Bengaluru,+Karnataka+560048!5e0!6i10' width={"100%"} height={"300px"}/>
        </Col>
        </Row>
    </Container>
  )
}

export default Contact