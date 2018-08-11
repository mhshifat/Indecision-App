import React from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#root')

const OptionModal = (props) => {
    return (
        <Modal style={props.style} isOpen={props.isOpen} contentLabel="Option Modal">
            <h4>Selected Modal</h4>
            <p>{props.title}</p>
            <button style={props.styleCustom} onClick={props.click}>Okey</button>
        </Modal>
    )
}

export default OptionModal