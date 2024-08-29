import React from 'react';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import DOMPurify from 'dompurify';
const OrderSection = ({ heading, paragraph, card }) => {
  return (
    <Container fluid>
      <Row className='gap-3'>
        <Col xs={12}>
          <h3 className="display-6 fw-bold fs-1">{heading}</h3>
        </Col>
        {paragraph && (
          <Col xs={12} className="mt-3">
            <p className="text-secondary fs-5">{paragraph}</p>
          </Col>
        )}
        <Col xs={12} className="mt-3">
          <Container fluid={true}>
            <Row className="gap-3 gap-md-4 gap-lg-5 justify-content-center">
              {card.map((c, ind) => (
                <Col
                  key={ind}
                  className="order_card border border-secondary-subtle text-center text-md-start text-lg-center m-0 py-5 rounded-2 d-flex flex-column justify-content-center gap-3"
                  xs={12}
                  sm={6}
                  md={4}
                >
                  <div
                    dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(c.icon) }}
                    className='order_svg'
                  />
                  <p className='fs-4 order_para'>{c.content}</p>
                </Col>
              ))}
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

OrderSection.propTypes = {
  heading: PropTypes.string.isRequired,
  paragraph: PropTypes.string,
  card: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default OrderSection;
