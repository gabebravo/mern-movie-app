import React from 'react'
import { Button, Modal } from 'react-bootstrap'

const SmallModal = props => (
  <Modal {...props} bsSize="small" aria-labelledby="contained-modal-title-sm">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-sm">Player Name Required</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Please Note</h4>
          <p>Per the instructions, you must enter a player name between 3 and 10 charecters in length</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
);

export default SmallModal
