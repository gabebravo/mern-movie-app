import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
  Button, Row, Col, FormGroup, ControlLabel,
  FormControl, HelpBlock, ListGroup, ListGroupItem
} from 'react-bootstrap'

// Components
import Header from '../components/Header'
import Scoreboard from '../components/Home/Scoreboard'

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
    else if (length < 3 || length > 3 ) return 'warning';
    else if (length > 0) return 'error';
  }

  handleChange = (e) => {
    this.setState({ playerName: e.target.value });
  }

  allowLink = (playername) => {
    return (
      playername.length > 2 && playername.length < 11 ?
      <Link className='button' to={`/movie-game/${this.state.playerName}`} >
        <Button bsStyle="info" bsSize="large" >
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
        <Row className="pad-bottom">
          <Col xsHidden md={4} />
          <Col xs={12} md={4} >
            <p>Welcome to the IMDB Challenge Game. The rules are simple, you will be shown 2 different movies, and you have to pick which one has the higher score. Each correct guess will increase your score by 2 points. After choosing, youll be shown the correct choice and the incoorect choice as well as a button to continue. At any point if you want to quit the game click the button that says "End Game Now". At the end of your game, you will be shown your final score, and if you have a TOP 10 score, you will be added to the leader board along with your awesome score. If you're ready to play, enter your name and hit the "Play Now" button.</p>
          </Col>
          <Col xsHidden md={4} />
        </Row>
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
                    placeholder="At least 2 charecters long, but no more than 10"
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
