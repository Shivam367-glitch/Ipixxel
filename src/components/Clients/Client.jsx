import { Col, Container, Row } from "react-bootstrap"
import clientJson from "../../Utility/client.json"

const Client = () => {

    const {clientList}=clientJson;
  return (
    <Container fluild={true} className="">
        <Row className="d-flex flex-column gap-3">
            <Col className="col-12">
            <h3 className="display-6 fw-bold">Our Clients</h3>
            </Col>
            <Col className="col-12">
              <p className="text-secondary fw-medium"  >Providing tailored solutions and expert guidance to optimize IT infrastructure for our diverse clientele, ensuring seamless operations and technological excellence.</p>
            </Col>
            <Col className="col-12 client_container">
              <Row className="d-flex justify-content-center gap-3 px-3 py-5 row-cols-md-auto">
                 {
                    clientList.map((client,ind)=>{
                        return(
                            <Col as={'img'} src={client} key={ind} className="col-5 rounded-3 m-0 p-0"/>
                        )
                    })
                 }
              </Row>
            </Col>
        </Row>

    </Container>
  )
}

export default Client