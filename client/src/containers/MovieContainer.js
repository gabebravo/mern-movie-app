import React, { Component } from 'react';
import { Button, Row, Col, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom'

import Movie from '../components/Movie/Movie';
import axios from 'axios';

const API_KEY = 'a4d1e40e';
const IMDB_API = 'http://www.omdbapi.com/?i=';

let styles = {
  minHeight: 100,
  marginTop: 20
}

class MovieContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      score: 0,
      movieStore: [],
      movies: [],
      winningMovie: 2,
      movie1Score: 0,
      movie2Score: 0
    }
  }

  getMovieSet = () => {

    let movieArray = this.state.movieStore;
    let twoMovies = this.getTwoMovieIds();

    let movie1 = this.state.movieStore[twoMovies[0]];
      movieArray.splice(twoMovies[0], 1);

    let movie2 = this.state.movieStore[twoMovies[1]];
      movieArray.splice(twoMovies[1], 1);

    this.setState({
      movieStore: movieArray,
      winningMovie: 2,
      movie1Score: 0,
      movie2Score: 0
    });

    let results = [];

    axios.all([this.getImdbInfo(movie1), this.getImdbInfo(movie2)])
      .then(axios.spread(function (movie1, movie2) {
          results.push(movie1);
          results.push(movie2);
    }))
      .then( () => {
        this.setState({ movies: results });
      });
  }

  getTwoMovieIds = () => {
    const max = this.state.movieStore.length, min = 0;
    return [ Math.floor(Math.random() * (max - min) + min),
      Math.floor(Math.random() * (max - min) + min)
    ]
  }

  getImdbInfo = (movie) => {
    return axios.get(`${IMDB_API}${movie.id}&apikey=${API_KEY}`);
  }

  componentDidMount() {
    this.setState({ winningMovie: 2 })
    axios.get('/movies')
    .then(response => {
      this.setState({
        movieStore: response.data
      });
    })
    .then( () => {
      this.getMovieSet();
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  movieChoice = (guess) => {
    // winningMovie init val = 2, if less than 2, they already picked and are trying to click again, so skip this
    if( this.state.winningMovie < 2 ) { return }
    let winningMovie = ( Number(this.state.movies[0].data.imdbRating) > Number(this.state.movies[1].data.imdbRating) ) ?
      0 : 1;
    if( guess === winningMovie ) {
      this.setState({
        score: this.state.score + 1,
        winningMovie: winningMovie,
        movie1Score: this.state.movies[0].data.imdbRating,
        movie2Score: this.state.movies[1].data.imdbRating
       })
    } else {
      this.setState({
        winningMovie: winningMovie,
        movie1Score: this.state.movies[0].data.imdbRating,
        movie2Score: this.state.movies[1].data.imdbRating
      })
    }
  }

  renderMovies = (movieArr, winner) => {
    return movieArr.map( (movie, index)  => {
      return (
        <Movie
          key={`movie.data.Title${index}`}
          movieIndex={index}
          imgUrl={movie.data.Poster}
          title={movie.data.Title}
          actors={movie.data.Actors}
          plot={movie.data.Plot}
          onClick={this.movieChoice}
          movieStatus={ index === winner ? 'movie-winner' : winner === 2 ? '' : 'movie-loser' }
          movieScore={ index === 0 ? this.state.movie1Score : this.state.movie2Score }
        />
      );
    });
  }

  saveScore = () => {
    sessionStorage.score = this.state.score;
  }

  render() {
    let nextMovieSet = this.state.movies.length > 0 ? this.renderMovies(this.state.movies, this.state.winningMovie) : <div></div>;
    const playerName = sessionStorage.playerName;
    return (
      <div style={styles}>
        <Row>
          <Col xs={6} md={6}>
            <div className="score">
              <h3>{playerName}: <Badge>{this.state.score}</Badge></h3>
            </div>
          </Col>
          <Col xs={6} md={6}>
            <Link to="/result" onClick={this.saveScore}>
              <Button bsStyle="info" bsSize="large" className="quit-button">End Game</Button>
            </Link>
          </Col>
        </Row>
        <Row style={styles} className="center">{ nextMovieSet }</Row>
          <Row style={styles}>
            <Col xs={12} md={12} className="center">
              <Button bsStyle="info" bsSize="large" onClick={this.getMovieSet}>
                Next Movie Set
              </Button>
            </Col>
          </Row>
      </div>
    );
  }
}

export default MovieContainer;
