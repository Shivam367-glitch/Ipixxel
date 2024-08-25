import { Col, Container, Row, Tab, Tabs } from 'react-bootstrap';
import { ProjectList } from "../../Utility/project.json";
import ProjectCard from "../../components/ProjectCard";


// TabContent Component
const TabContent = ({ category }) => (
  <Container fluid>
    <Row className='text-center gap-3 gap-sm-5 gap-lg-5 justify-content-center  justify-content-md-center'>
      {ProjectList.filter(item => item.category === category).map((item, ind) => (
        <ProjectCard item={item} key={ind} />
      ))}
    </Row>
  </Container>
);

const Work = () => (
  <Container fluid>
    <Row className='fs-4 text-black'>
      <Col className='tab_container'>
        <Tabs defaultActiveKey="ALL" className="mb-3 work_tab" fill>
          <Tab eventKey="ALL" title="ALL">
            <TabContent category="ALL" />
          </Tab>
          <Tab eventKey="UI/UX" title="UI/UX">
            <TabContent category="UI/UX" />
          </Tab>
          <Tab eventKey="WEB DEVELOPMENT" title="WEB DEVELOPMENT">
            <TabContent category="ALL" />
          </Tab>
        </Tabs>
      </Col>
    </Row>
  </Container>
);

export default Work;
