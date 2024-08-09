import { Col, Container, Row } from "react-bootstrap"
import { FaArrowRightLong } from "react-icons/fa6"
import { Link } from "react-router-dom";

const Contact = (props) => {

  const {background}=props;
  
  return (
    <Container fluid={true} className="text-white px-3 py-5 p-md-5" style={{backgroundImage:`url(${background})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:'bottom bottom'}}>
        <Row className="d-flex justify-content-md-center align-items-md-center m-md-5 text-md-center">
            <Col className="col-12 col-md-12 col-lg-6 gap-3"> 
               <p className="display-6">Ready to get free consulations for any kind of IT solutions ?</p>
                <Link to="/contact-us" className="btn-secondary mt-4 text-center d-inline-block">Contact Us <FaArrowRightLong/></Link>
            </Col>

        </Row>

    </Container>
  )
}

export default Contact