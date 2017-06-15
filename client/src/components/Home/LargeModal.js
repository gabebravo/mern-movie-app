import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import PropTypes from 'prop-types'

const LargeModal = props => (
  <Modal {...props} bsSize="large" aria-labelledby="contained-modal-title-lg">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">Player Name Required</Modal.Title>
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

LargeModal.propTypes = {
  onHide: PropTypes.func,
}

export default LargeModal
