import React from 'react'
require('../index.css')
require('../AddOptionComponent/AddOptionComponent.css')

const AddOptionComponent = (props) => {
    return (
        <div className="AddOptionComponent">
            <div className="container">
                <form className="AddOptionComponent__form" onSubmit={props.submit}>
                    <input className="AddOptionComponent__input" type="text" autoComplete="off" name="option" autoFocus/>
                    <button className="AddOptionComponent__btn" type="submit">Add Option</button>
                </form>
            </div>
        </div>
    )
}

export default AddOptionComponent