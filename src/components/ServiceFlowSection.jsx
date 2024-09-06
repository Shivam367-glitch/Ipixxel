import { Col, Container, Row } from "react-bootstrap";
import DOMPurify from "dompurify";
import { IoCheckmarkSharp } from "react-icons/io5";
const ServiceFlowSection = ({ heading,serviceFlow ,serviceFlowImage}) => { 
  console.log(serviceFlow["content"]);
  
  return (
    <Container fluid={true} className="border pe-4 pt-5 service_flow">
      <Row className="gap-5">
        <Col className="col-12 display-6 fw-medium text-md-center">
         {heading}
        </Col>
        <Col className="col-12 m-0 p-0">
          <Container fluid={true}>
            <Row className="flex-column flex-lg-row row-gap-4 p-2 p-lg-0">
              <Col className="m-0 p-0 m-lg-0 p-lg-0 text-center text-lg-start">
                <div>
                  <img
                    loading="lazy"
                    decoding="async"
                    src={serviceFlowImage.src}
                    className="img-fluid"
                    alt={""}
                    srcSet={serviceFlowImage.srcset}
                    sizes={serviceFlowImage.sizes}
                  />
                </div>
              </Col>
              <Col className="m-0 p-0">
                {serviceFlow.map((service,ind) => (
                  <div key={ind} className="d-flex flex-row gap-5">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(service.icon),
                      }}
                      className="service_icon"
                    />
                    <div className="d-flex flex-column gap-3 mb-3 border-bottom">
                      <h4 className="fs-3">
                        {service.title}
                        <span className="text-secondary">
                          {service.subTitle}
                        </span>
                      </h4> 
                      {
                      typeof service.content=="string"?<p className="text-secondary">{service.content}</p>:<ul className="list-unstyled">
                        {
                          service.content.map((item,ind)=>{
                            return <li  key={ind} className=" text-secondary mt-2  d-flex flex-row gap-3"><IoCheckmarkSharp className="align-self-center ui_list "/> {item}</li>
                            
                          })
                        }
                      </ul>
                      
                      }
                     
                    </div>
                  </div>
                ))}
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default ServiceFlowSection;
