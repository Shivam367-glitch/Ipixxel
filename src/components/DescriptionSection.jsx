import { Col, Container, Row } from "react-bootstrap"

const DescriptionSection = (props) => { 
  
  const {background,paragraphs,heading,imgInfo}=props
  return (
    <Container fluid={true} className="description_container" style={{backgroundImage:`url(${background})`}}>
    <Row className="mx-lg-3  text-white py-4">
        <Col className="col-12 text-md-center">
        <p className="display-6 fw-light">{heading}</p>
        
        </Col>
        <Col className="container-md  col-12"> 
          <Container fluid={true}>
          <Row  className="justify-content-around">
            <Col className="col-12 col-md-6 col-lg-5  align-self-md-center m-0 p-0">
              {
                paragraphs.map((para, ind) => (
                  <p className="fw-medium mt-2 fs-5 text-justify" key={ind}>{para}</p>
              ))
              }
            </Col>
            <Col className="col-12 col-md-5  col-lg-6  mt-2 m-md-0 p-0 text-center">
                <img decoding="async"  src={imgInfo.src} className="img-fluid wow animate__animated animate__backInRight" alt="" 
                srcSet={imgInfo.srcSet} sizes={imgInfo.sizes}></img>
            </Col>
          </Row>
          </Container>
        </Col>

    </Row>
    </Container>
  )
}

export default DescriptionSection