import React, {useRef, useEffect, useState} from 'react'
import Schedule from "./../schedule/Schedule";
import Line from '../line/Line';
import Button from '../button/button';

function Channel(props) {

    const myRef = useRef(null);
    const [live, setlive] = useState(0)

    /*
    * execute scroll to display the current tv program
    */
    const executeScroll = () => myRef.current.scrollLeft = live - window.innerWidth/2

    useEffect(() => {
        executeScroll()
    }, [live]);

    let scrollToLive = (width) =>{
        setlive(width)
    }
    
    let program =
        props.channels.map((channel) => {
            console.log(channel)
            return(
                <div key={channel.id} className="channel-row">
                    <div className="img-wrapper">
                        <img src={channel.images.logo} alt={channel.title} />
                    </div>
                    <div className="schedule">
                        <Schedule schedule={channel.schedules} />
                    </div>
                </div>
            ) 
        })
    return (
        <div className="program-container" ref={myRef}>
            <Line scrollToLive={scrollToLive}/>
            {program}
            <Button scrollToLive={scrollToLive}/>
        </div>
    )
}

Channel.propTypes = {

}

export default Channel

