import React, {useEffect, useState} from 'react'
import moment from 'moment';

function Line(props) {

    //TODO check time to be right
    let startoftheday = moment().startOf('day');
    let difference = 5 * (moment().diff(startoftheday, 'minutes')) + 60;
    

    const [linePosition, setlinePosition] = useState(0)

    setInterval(() => {
            difference = 5 * (moment().diff(startoftheday, 'minutes')) + 60
            setlinePosition(difference)
            props.scrollToLive(difference)
        }, 60000);

    useEffect(() => {
        setlinePosition(difference)
        props.scrollToLive(difference)
    }, [difference]);
    
    return (
        <div style={{left: linePosition +"px"}} className="line" id="line">
            
        </div>
    )
}

export default Line
