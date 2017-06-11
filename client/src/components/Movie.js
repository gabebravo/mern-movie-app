import React from 'react'
import { Button, Row, Col } from 'react-bootstrap';

let styles = {
  minHeight: 100,
  marginTop: 20,
  textAlign: 'center'
}

const Movie = props => (
  <div>
    <Row className="show-grid" style={styles}>
      <Col xs={12} md={6}>
        <img src={props.imdb[0].data.Poster} alt="Imdb movie poster"/>
        <h3>{props.imdb[0].data.Title}</h3>
        <Button bsStyle="info" bsSize="large" onClick={this.btnClick}>
          Select
        </Button>
      </Col>
      <Col xs={12} md={6}>
        <img src={props.imdb[1].data.Poster} alt="Imdb movie poster"/>
        <h3>{props.imdb[1].data.Title}</h3>
        <Button bsStyle="info" bsSize="large" onClick={this.btnClick}>
          Select
        </Button>
      </Col>
    </Row>
  </div>
);

export default Movie;
