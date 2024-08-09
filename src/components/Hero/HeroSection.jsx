import { Col, Container, Row } from "react-bootstrap"


const HeroSection = (props) => {
  return (
    <Container fluid={true} style={{background:`url(${props.background})`}} className="hero_container m-0">
      <Row className="m-0 p-0"> 
        <Col className=" col-12 m-0 p-0"> 
            <h1 className="display-2 fw-bold">{props.heading}</h1>
        </Col>
        </Row>  

    </Container>
  )
}

export default HeroSection