import React, {useEffect, useState} from 'react'
import moment from 'moment';

function Line(props) {

    //TODO check time to be right
    let startoftheday = moment().startOf('day');
    let difference = 5 * (moment().diff(startoftheday, 'minutes')) + 60;
    

    const [linePosition, setlinePosition] = useState(0)

    setInterval(() => {
            difference = 5 * (moment().diff(startoftheday, 'minutes')) + 60
            console.log(difference)
            setlinePosition(difference)
            props.scrollToLive(difference)
        }, 60000);

    useEffect(() => {
        console.log(difference)
        setlinePosition(difference)
        props.scrollToLive(difference)
    }, [difference]);
    // let programContainer = document.getElementById('program-container');
    // programContainer.scroll(linePosition, 0);
    return (
        <div style={{left: linePosition +"px"}} className="line" id="line">
            
        </div>
    )
}

export default Line
