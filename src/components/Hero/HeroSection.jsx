import { Col, Container, Row } from "react-bootstrap"
import { useLocation } from "react-router-dom";


const HeroSection = (props) => {
 const location= useLocation(); 
console.log(location);

  const {background,heading,subHeading,backgroundPosition}=props;
   
  return (
    <Container fluid={true} style={{backgroundImage:`url(${background})`,backgroundPosition:backgroundPosition}} className="hero_container">
      <Row className="m-0 p-0"> 
        <Col className=" col-12 m-0 p-0 overflow-hidden "> 
            <h1 className="display-2 fw-bold d-inline-block ms-md-4 wow animate__animated animate__backInLeft ">{heading}</h1>
            { 
             (location.pathname!="/blogs") ? subHeading && <h1 className="display-2 fw-bold  ms-md-4 wow animate__animated animate__backInRight">{subHeading}</h1>:subHeading && <p className="fs-4 ms-md-4 wow animate__animated animate__backInRight">{subHeading}</p>
            }
        </Col>

      </Row>  
    </Container>
  )
}

export default HeroSection