import React from 'react'
require('../index.css')
require('./OptionComponent.css')

const OptionComponent = (props) => {
    return (
        <div className="OptionComponent">
            <div className="container">
               <div className="OptionComponent__main-box">
                    <p className="OptionComponent__title">{props.index}. { props.title }</p>
                    <p className="OptionComponent__remove" onClick={props.click}>Remove</p>
               </div>
            </div>
        </div>
    )
}

export default OptionComponent