import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Row, Col } from 'react-bootstrap'

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
    this.state = {}
  }

  render(){
    return (
      <div style={styles}>
      <Header text={`top 10 scores`}/>
      <Scoreboard />
        <Header text={`Your final score was ${sessionStorage.score}`}/>
        <Instructions text={`Thanks for playing the IMDB Challenge Game. If you want to play another game, simply hit the "Play Again" button.`} />
        <Row className="show-grid" style={styles}>
          <Col xs={12} md={12} className="center">
            <Link to='/'>
              <Button bsStyle="info" bsSize="large">
                Play Again
              </Button>
            </Link>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ResultContainer
