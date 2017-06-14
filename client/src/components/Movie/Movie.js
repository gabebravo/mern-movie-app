import React from 'react'
import { Button, Col } from 'react-bootstrap'
import PropTypes from 'prop-types'

const Movie = props => (
  <Col xs={6} md={6} className="center">
    <img src={props.imgUrl} alt="Imdb movie poster" />
    <div className="movie-text">
      <h3>{props.title}</h3>
      <h3 className={props.movieStatus}>{
        props.movieScore > 0 ? `Imdb Rating: ${props.movieScore}`: ``
      }</h3>
      <h5><b>Cast:</b> {` ${props.actors}`}</h5>
      <p>{`${props.plot}`}</p>
    </div>
    <Button bsStyle="info" bsSize="large" onClick={() => props.onClick(props.movieIndex)}>
      Select
    </Button>
  </Col>
);

Movie.propTypes = {
  imgUrl: PropTypes.string,
  title: PropTypes.string,
  movieStatus: PropTypes.string,
  movieScore: PropTypes.string,
  actors: PropTypes.string,
  plot: PropTypes.string,
  movieIndex: PropTypes.function
}

export default Movie;
