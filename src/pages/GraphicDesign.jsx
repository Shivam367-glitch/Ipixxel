import { Col, Container, Row } from "react-bootstrap"
import Contact from "../components/Contact/Contact"
import HeroSection from "../components/Hero/HeroSection"
import DescriptionSection from '../components/DescriptionSection'
import {descriptionList} from "../Utility/description.json";
 

const GraphicDesign = () => {
  const {backgroundImage,heading,paragraphs,imgInfo}=descriptionList[3]

  return (
    <Container fluid={true}>
    <Row> 
        <Col className="col-12 m-0 p-0">
              <HeroSection background="graphicHero.jpg" heading="Graphic" subHeading="Designing" backgroundPosition="right center"/>
        </Col>
        <Col className="col-12 m-0 p-0  mt-4">
          <DescriptionSection background={backgroundImage} paragraphs={paragraphs} heading={heading} imgInfo={imgInfo}/>
        </Col>
        <Col className="col-12 mt-4 p-md-4  wow animate__animated animate__zoomIn">
          <Contact background="Contact.webp" />
        </Col>
    </Row>

    </Container>
  )
}

export default GraphicDesign