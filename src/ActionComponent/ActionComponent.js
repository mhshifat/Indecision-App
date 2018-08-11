import React from 'react'
require('../index.css')
require('./ActionComponent.css')

const ActionComponent = (props) => {
    return (
        <div className="ActionComponent">
            <div className="container">
                <div className="ActionComponent__btn-box">
                    <button onClick={props.modal} className="ActionComponent__btn" disabled={!props.hasOption}>What should i do?</button>                
                </div>
                <div className="ActionComponent__actions">
                    <h3 className="ActionComponent__actions-name">Your Options</h3>
                    <button className="ActionComponent__actions-btn" disabled={!props.hasOption} onClick={props.click}>Remove All</button>                
                </div>
            </div>
        </div>
    )
}

export default ActionComponent