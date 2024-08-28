
import { Col } from 'react-bootstrap'

const Map = () => {
  return (
    <Col className="col-12 m-0 p-0 mt-4 px-2 px-md-4">
          <iframe
            allowFullScreen
            loading="lazy"
            src="https://www.google.com/maps/embed?origin=mfe&pb=!1m4!2m1!1sArdent+Office+One,+Hoodi+Main+Rd+Hoodi,++Bengaluru,+Karnataka+560048!5e0!6i10"
            width="100%"
            height="300px"
            title="Google Maps"
          />
        </Col>
  )
}

export default Map