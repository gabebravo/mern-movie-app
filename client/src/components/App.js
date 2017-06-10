import React, { Component } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import Movie from './Movie';
import axios from 'axios';

const API_KEY = 'a4d1e40e';
const IMDB_API = 'http://www.omdbapi.com/?i=';

let styles = {
  minHeight: 100,
  marginTop: 20,
  textAlign: 'center'
}

class App extends Component {

  constructor(){
    super();
    this.state = {
      movieStore: [],
      movies: []
    }
  }

  someCallback = () => {

    let movieArray = this.state.movieStore;
    let twoMovies = this.getTwoMovieIds();

    let movie1 = this.state.movieStore[twoMovies[0]];
      movieArray.splice(twoMovies[0], 1);

    let movie2 = this.state.movieStore[twoMovies[1]];
      movieArray.splice(twoMovies[1], 1);

    this.setState({ movieStore: movieArray});

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
    axios.get('/movies')
    .then(response => {
      this.setState({
        movieStore: response.data
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
        <Row className="show-grid" style={styles}>
          <Col xs={12} md={12}>
            <Button bsStyle="info" bsSize="large" onClick={this.someCallback}>
              Next Movie Set
            </Button>
          </Col>
        </Row>
        {
          this.state.movies.length > 0 && <Movie imdb={this.state.movies} />
        }
      </div>
    );
  }
}

export default App;
