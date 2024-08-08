import { Col, Container, Row } from "react-bootstrap"
import Slider from "../../components/Slider/Slider"
import Contact from "../../components/Contact/Contact"
import Client from "../../components/Clients/Client"


const Home = () => {
  return (
    <Container fluid className="m-0 p-0">
      <Row className="m-0 p-0">
        <Col className="m-0 p-0 col-12">
          <Slider />
        </Col>

        <Col className="m-0 p-0 col-12 mt-5">
         <Contact background="HomeContact.webp"/>
        </Col>

        <Col className="m-0 p-0 col-12 mt-5 w-100">
          <Client/>
        </Col>
      </Row>
   </Container> 
  )
}

export default Home