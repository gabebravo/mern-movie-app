import React from 'react'
import { Row, Col } from 'react-bootstrap'
import PropTypes from 'prop-types'

const Instructions = ({ text }) => (
  <Row className="pad-bottom">
    <Col xsHidden md={4} />
    <Col xs={12} md={4} >
      <p>{text}</p>
    </Col>
    <Col xsHidden md={4} />
  </Row>
);

Instructions.propTypes = {
  text: PropTypes.string
}

export default Instructions
