import React from 'react'

require('../index.css')
require('./HeaderComponent.css')

const HeaderComponent = () => {
    return (
        <div className="HeaderComponent">
            <div className="container">
                <h1 className="HeaderComponent__title">Indecision</h1>
                <h2 className="HeaderComponent__sub-title">Put your life in the hands of computer</h2>
            </div>
        </div>
    )
}

export default HeaderComponent