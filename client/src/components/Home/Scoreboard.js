import React from 'react'
import {
  Row, Col, ListGroup, ListGroupItem
} from 'react-bootstrap'

const getScores = (players) => {
  return players.map( (player, index) => {
    return <ListGroupItem key={index}>{player.player}: {player.score}</ListGroupItem>
  })
}

const Scoreboard = props => (
  <Row>
    <Col xsHidden md={4} />
      <Col xs={12} md={2}>
        <ListGroup>
          {getScores(props.players.slice(0, 5))}
        </ListGroup>
      </Col>
      <Col xs={12} md={2}>
        <ListGroup>
          {getScores(props.players.slice(5, 10))}
        </ListGroup>
      </Col>
    <Col xsHidden md={4} />
  </Row>
);

export default Scoreboard;
