
import { Col, Container, Row } from "react-bootstrap";
import DOMPurify from "dompurify";

const ServiceFlowSection = ({ serviceFlow }) => {
 
  return (
    <Container fluid={true} className="border pe-4 pt-5 service_flow" >
      <Row className="gap-5">
        <Col className="col-12 display-6 fw-medium text-center">
          Website Designing Process
        </Col>
        <Col className="col-12 m-0 p-0">
          <Container fluid={true}>
            <Row>
              <Col className="m-0 p-0">
                <div>
                  <img
                    loading="lazy"
                    decoding="async"
                    width="552"
                    height="704"
                    src="https://ipixxel.com/wp-content/uploads/2024/06/Website-Designing-Process.webp"
                    className="attachment-large size-large wp-image-4299"
                    alt=""
                    srcSet="https://ipixxel.com/wp-content/uploads/2024/06/Website-Designing-Process.webp 552w, https://ipixxel.com/wp-content/uploads/2024/06/Website-Designing-Process-235x300.jpg 235w"
                    sizes="(max-width: 552px) 100vw, 552px"
                  />
                </div>
              </Col>
              <Col  className="ms-0 ps-0 service_content">
                {serviceFlow.map((service, ind) => {
                  return (
                    <div key={ind} className="d-flex flex-row gap-5 service_icon">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: DOMPurify.sanitize(service.icon),
                        }}
                      />
                      <div className="d-flex flex-column gap-3 mb-3">
                        <h4 className="fs-3">{service.title}</h4>
                        <p className="text-secondary">{service.content}</p>
                      </div>
                    </div>
                  );
                })}
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default ServiceFlowSection;
