import { Col, Container, Row } from "react-bootstrap"

const DescriptionSection = (props) => {
  return (
    <Container fluid={true} className="description_container" style={{backgroundImage:`url(${props.background})`}}>
    <Row className="mx-lg-3  text-white py-4">
        <Col className="col-12 text-md-center">
        <p className="display-6 fw-light">We Listen, Adapt And Deliver.</p>
        
        </Col>
        <Col className="container-md  col-12  py-5"> 
            <Container fluid={true}>
            <Row  className="justify-content-around ">
            <Col className="col-12 col-md-5 align-self-md-center  m-0 p-0 ">
            <p className="fw-medium"> iPixxel, head quartered in Bangalore, It is a fast growing IT Company which provides holistic IT solutions to businesses across geographies. We offer IT expertise in application development (IOS & Android), server side development & digital marketing. We have forayed into iOT & e-commerce industries so far. We have plans to enter into IT enabled education services & food service industry. Currently, we have a team of highly skilled IT professionals that work round the clock to ensure iPixxel stays true to its offerings & commitments.</p>
          
            </Col>  
            <Col className="col-12 col-md-6 mt-2 m-md-0 p-0">
            <img decoding="async"  src="about-us-ipixxel-768x512.jpg" className="img-fluid" alt="" srcSet="about-us-ipixxel-768x512.jpg 768w,about-us-ipixxel-300x200.jpg 300w, https://ipixxel.com/wp-content/uploads/2024/05/about-us-ipixxel-1024x683.jpg 1024w,about-us-ipixxel-1536x1024.jpg 1536w,about-us-ipixxel-2048x1365.jpg 2048w,about-us-ipixxel-600x400.jpg 600w" sizes="(max-width: 768px) 100vw, 768px"></img>
            </Col>
            </Row>
            </Container>
        </Col>

    </Row>
    </Container>
  )
}

export default DescriptionSection