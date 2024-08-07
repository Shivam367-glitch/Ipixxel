import { Col, Container, Row } from "react-bootstrap"
import Slider from "../../components/Slider/Slider"


const Home = () => {
  return (
    <Container fluid className="m-0 p-0">
      <Row className="m-0 p-0">
        <Col className="m-0 p-0">
          <Slider />
        </Col>
      </Row>
   </Container> 
  )
}

export default Home