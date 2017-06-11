import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Row, Col } from 'react-bootstrap';

let styles = {
  minHeight: 100,
  marginTop: 20,
  textAlign: 'center'
}

const Result = () => (
  <div>
    <h3>THIS IS THE RESULT PAGE</h3>
    <Row className="show-grid" style={styles}>
      <Col xs={12} md={12}>
        <Link to='/'>
          <Button bsStyle="info" bsSize="large">
            Play Again
          </Button>
        </Link>
      </Col>
    </Row>
  </div>
);

export default Result
