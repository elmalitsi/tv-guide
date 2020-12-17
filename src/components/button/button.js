import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment';

function Button(props) {


    const goToLiveShows = () =>{
        
        let startoftheday = moment().startOf('day');
        let difference = 5 * (moment().diff(startoftheday, 'minutes')) + 60;
        props.scrollToLive(difference)
    }


    return (
        <div className="button-now" onClick={goToLiveShows}>
            NOW            
        </div>
    )
}


export default Button

