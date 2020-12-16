import React from 'react'
import PropTypes from 'prop-types'
import './Loader.scss';

function Loader(props) {
    return (
        <div className="loader-wrapper">
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
    )
}


export default Loader

