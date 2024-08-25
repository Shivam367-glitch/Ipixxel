import { Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProjectCard = ({ item }) => {
  const { imgSrc, href, category, title } = item;
  return (
    <Col xs={12} sm={4} md={5} lg={3} className='shadow rounded-4 p-1'>
      <Card className=' border-0'>
        <Card.Img variant="top" src={imgSrc} className="rounded-3 p-1" />
        <Card.Body className="d-flex flex-row flex-sm-column flex-md-row justify-content-between align-items-center align-items-sm-stretch align-items-md-center">
          <div className="mb-2">
            <h5 className="card-title">{title}</h5>
          </div>
          {category !== "UI/UX" && (
            <Link to={href} target='_blank' className="btn text-white rounded-pill px-3 py-1 fs-5" style={{ backgroundColor: "#fe4c1c" }}>
              View
            </Link>
          )}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProjectCard;
