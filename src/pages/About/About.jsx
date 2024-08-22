import { Col, Container, Row } from "react-bootstrap";
import Contact from "../../components/Contact/Contact";
import HeroSection from "../../components/Hero/HeroSection";
import DescriptionSection from "../../components/DescriptionSection";
import { list } from "../../Utility/whoWeAre.json";
import {descriptionList} from "../../Utility/description.json";
const About = () => { 

  
  const {backgroundImage,heading,paragraphs,imgInfo}=descriptionList[1]
  return (
    <Container fluid={true} className="overflow-hidden">
      <Row className="d-flex flex-column">
        <Col className="col-12 m-0 p-0">
          <HeroSection background="aboutHero.webp" heading="About Us" />
        </Col>

        <Col className="col-12 m-0 p-0  mt-4">
          <DescriptionSection background={backgroundImage} paragraphs={paragraphs} heading={heading} imgInfo={imgInfo}/>
        </Col>

        {/* Who We Are Section */}

        <Col className="col-12 mt-4 p-md-5">
          <Container fluid={true}>
            <Row className="gap-3 gap-md-0 gap-lg-4  justify-content-lg-start">
              {list.map((list, ind) => {
                return (
                  <Col
                    xs={12}
                    md={4}
                    key={ind}
                    style={{ backgroundColor: `${list.backgroundColor}`}}
                    className="py-2 col-lg"
                  >
                    <h3 className="fw-medium">{list.heading}</h3>
                    <p>{list.content}</p>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </Col>

        <Col className="col-12 mt-4 p-md-4  wow animate__animated animate__zoomIn">
          <Contact background="Contact.webp" />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
