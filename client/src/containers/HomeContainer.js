import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
  Button, Row, Col, FormGroup, ControlLabel,
  FormControl, HelpBlock, ListGroup, ListGroupItem
} from 'react-bootstrap'

// Components
import Header from '../components/Header'
import Scoreboard from '../components/Home/Scoreboard'
import Instructions from '../components/Home/Instructions'

let styles = {
  minHeight: 100,
  marginTop: 20
}

class Home extends Component {

  constructor() {
    super();
    this.state = {
      playerName: ''
    }
  }

  getValidationState = () => {
    const length = this.state.playerName.length;
    if (length > 2 && length < 11) return 'success';
    else if (length < 3 || length > 10 ) return 'warning';
    else if (length > 0) return 'error';
  }

  handleChange = (e) => {
    this.setState({ playerName: e.target.value });
  }

  savePlayerName = () => {
    const playerName = this.state.playerName;
    sessionStorage.playerName = playerName;
  }

  allowLink = (playername) => {
    return (
      playername.length > 2 && playername.length < 11 ?
      <Link to="/movie-game" >
        <Button bsStyle="info" bsSize="large" onClick={this.savePlayerName}>
          Play Now
        </Button>
      </Link> :
        <Button bsStyle="info" bsSize="large" >
          Play Now
        </Button>
    );
  }

  render(){
    return(
      <div style={styles}>
      <Header text={`top 10 scores`}/>
      <Scoreboard />
        <Header text={`instructions for playing`}/>
        <Instructions text={`Welcome to the IMDB Challenge Game. You'll be shown two different movies and have to pick the one you think has the higher score. Each correct guess will increase your score by two points. Each round will show the winning and loasing choice. You can quit anytime by clicking the "End Game Now" button. At the end of your game, you'll be shown your final score, and if you have a TOP 10 score, you'll be added to the leader board along with your awesome score. If you're ready to play, enter your name and hit the "Play Now" button.`} />
          <Row>
            <Col xsHidden md={4} />
            <Col xs={12} md={4} className="center pad-bottom">
              <form>
                <FormGroup
                  controlId="formBasicText"
                  validationState={this.getValidationState()}
                >
                  <ControlLabel>Enter Your Player Name</ControlLabel>
                  <FormControl
                    type="text"
                    value={this.state.playerName}
                    placeholder="At least 3 charecters long, but no more than 10"
                    onChange={this.handleChange}
                  />
                  <FormControl.Feedback />
                  <HelpBlock>Validation is based on string length.</HelpBlock>
                </FormGroup>
              </form>
            </Col>
            <Col xsHidden md={4} />
          </Row>
          <Row>
            <Col xs={12} md={12} className="center pad-bottom">
              {this.allowLink(this.state.playerName)}
            </Col>
        </Row>
      </div>
    );
  }
}

export default Home
