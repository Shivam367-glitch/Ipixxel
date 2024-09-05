import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const SliderCard = (props) => {
  
const {background,buttonInfo,header,image,subHeader,list}=props
	
  return (
      <Row className="d-flex flex-column flex-md-row justify-content-center"  style={{ backgroundColor: `${background}`}}>
	 <Col className="col-12 col-md-6 align-self-center">
	 <div className="d-flex flex-column gap-4 mx-2 mx-md-5 mt-1 justify-content-md-center">
        <h2 className="fw-bolder display-6">
          {header}{" "}
          <span className="org">{subHeader}</span> 
        </h2>
        <ul className="d-flex flex-column gap-2 service_list">
			{
				list.map((item,ind)=>{
					return (
						
						<li key={ind} className="service_list_item">
						<span className="fw-medium service_list_text">{item}</span>
					  </li>
					)
				})
			}
         
        </ul>
        <div className="mb-md-5">
          <Link to={buttonInfo.href} className="btn-primary service_slider_button">
           {buttonInfo.name}
          </Link>
        </div>
      </div>
	 </Col>
	<Col className="col-12 col-md-6 mt-4 mt-md-0">
      <div className="mx-2 mx-md-5 mt-2 d-flex flex-row justify-content-center align-items-center">
        <img
          loading="lazy"
          decoding="async"
		  className="slider-image"
		//   width={image.width}
		//   height={image.height}
          src={image.src}
          alt={image.alt}
        //   srcSet={image.srcset}
        //   sizes={image.sizes}
        />
      </div>
	</Col>
	  </Row>

  );
};

export default SliderCard;
