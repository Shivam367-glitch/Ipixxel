import { Col } from "react-bootstrap";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";


const ServiceCard = (props) => {
  console.log(props);
  
  
    return (
    <Col xs={10} sm={8} md={8} lg={3} className="box zoom-in m-0 p-0">
        <img src={props.image} alt={props.name}/>
        <h2 className="ms-1">{props.name}</h2>
        <p>{props.content}</p>
        <Link to={props.href} className="border border-white rounded-1"><FaArrowRightLong color="white"/></Link>
    </Col>
  )
}

export default ServiceCard