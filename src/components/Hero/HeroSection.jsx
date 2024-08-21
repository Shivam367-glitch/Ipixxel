import { Col, Container, Row } from "react-bootstrap"


const HeroSection = (props) => {

  const {background,heading,subHeading,backgroundPosition}=props;
   
  return (
    <Container fluid={true} style={{backgroundImage:`url(${background})`,backgroundPosition:backgroundPosition}} className="hero_container">
      <Row className="m-0 p-0"> 
        <Col className=" col-12 m-0 p-0 overflow-hidden "> 
            <h1 className="display-2 fw-bold d-inline-block ms-md-4 wow animate__animated animate__backInLeft ">{heading}</h1>
            {
             subHeading && <h1 className="display-2 fw-bold  ms-md-4 wow animate__animated animate__backInRight">{subHeading}</h1>
            }
        </Col>

      </Row>  
    </Container>
  )
}

export default HeroSection