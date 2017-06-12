import React from 'react'
import {
  Row, Col, ListGroup, ListGroupItem
} from 'react-bootstrap'

const Scoreboard = () => (
  <Row>
    <Col xsHidden md={4} />
    <Col xs={12} md={2}>
      <ListGroup>
        <ListGroupItem>Player1: 20</ListGroupItem>
        <ListGroupItem>Player2: 18</ListGroupItem>
        <ListGroupItem>Player3: 16</ListGroupItem>
        <ListGroupItem>Player4: 14</ListGroupItem>
        <ListGroupItem>Player5: 12</ListGroupItem>
      </ListGroup>
    </Col>
    <Col xs={12} md={2}>
      <ListGroup>
        <ListGroupItem>Player6: 10</ListGroupItem>
        <ListGroupItem>Player7: 08</ListGroupItem>
        <ListGroupItem>Player8: 06</ListGroupItem>
        <ListGroupItem>Player9: 04</ListGroupItem>
        <ListGroupItem>Player10: 02</ListGroupItem>
      </ListGroup>
    </Col>
    <Col xsHidden md={4} />
  </Row>
);

export default Scoreboard;
