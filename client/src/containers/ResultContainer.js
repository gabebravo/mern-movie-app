import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Row, Col } from 'react-bootstrap'
import axios from 'axios'

// Components
import Header from '../components/Header'
import Scoreboard from '../components/Home/Scoreboard'
import Instructions from '../components/Home/Instructions'

let styles = {
  minHeight: 100,
  marginTop: 20
}

class ResultContainer extends Component {
  constructor(){
    super();
    this.state = {
      playAgain: false,
      playerScores: []
    }
  }

  getScores = () => {
    return axios.get('/scores');
  }

  updateScores = () => {
    return axios.post('scores/update', {
      player: sessionStorage.playerName,
      score: sessionStorage.score
    })
  }

  componentDidMount() {
    this.updateScores()
      .then( () => {
        this.getScores()
          .then( scores => {
            this.setState({
              playerScores: scores.data
            });
          })
      })
      .catch(function (scores) {
        console.log(scores);
      });
  }

  render(){
    const playerName = sessionStorage.playerName;
    const playerScores = this.state.playerScores;
    return (
      <div style={styles}>
      <Header text={`top 10 scores`}/>
      { playerScores.length > 0 && <Scoreboard players={playerScores} /> }
        <Header text={`${playerName} your final score was ${sessionStorage.score}`}/>
        <Instructions text={`Thanks for playing the IMDB Challenge Game. If you want to play another game, simply hit the "Play Again" button. To play with a new player, click on "New Player"`} />
        <Row className="show-grid" style={styles}>
          <Col xs={12} md={12} className="center">
            <Link to='/movie-game'>
              <Button bsStyle="info" bsSize="large" onClick={this.playAgainClicked}>
                Play Again
              </Button>
            </Link>
            <Link to='/'>
              <Button bsStyle="info" bsSize="large" className="button-spacing" onClick={this.playAgainClicked}>
                New Player
              </Button>
            </Link>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ResultContainer
