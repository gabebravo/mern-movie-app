import React from 'react'
import { Row, Col } from 'react-bootstrap'

const styles = {
  textAlign: 'center',
  textTransform: 'uppercase',
  minHeight: '7rem'
}

const Header = ({ text }) => (
  <Row style={styles}>
    <Col xs={12} md={12}>
      <h3>{text}</h3>
    </Col>
  </Row>
);

export default Header
