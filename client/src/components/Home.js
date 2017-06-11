import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Row, Col } from 'react-bootstrap'

let styles = {
  minHeight: 100,
  marginTop: 20,
  textAlign: 'center'
}

const Home = () => (
  <div>
    <h3>THIS IS THE HOMEPAGE</h3>
      <Row className="show-grid" style={styles}>
        <Col xs={12} md={12}>
          <Link className='button' to='/movie-game'>
            <Button bsStyle="info" bsSize="large">
              Movie Game
            </Button>
          </Link>
        </Col>
      </Row>
  </div>
);

export default Home
