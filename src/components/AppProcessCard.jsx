import { Card, Col } from "react-bootstrap";

const AppProcessCard = ({ heading, paragraph, image, number }) => {
  return (
    <Card
      as={Col}
      xs={12}  
      md={3}  
      
      className="m-0 p-0 gap-3 border-0 rounded-3 wow animate__animated animate__zoomIn"
    >
      <h4 className="ps-3 fs-3 fw-medium mt-3">{heading}</h4>
      <p className="px-3 text-secondary">{paragraph}</p>
      <img src={image} alt={`${heading} image`} className="img-fluid h-100 rounded-3" />
      <span className="position-absolute bottom-0 fw-bold display-1 text-white ms-3">
        {number}
      </span>
    </Card>
  );
};

export default AppProcessCard;
