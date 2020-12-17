import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment';

function Schedule(props) {
    let liveProgramIndex = -1;

    let schedule =
    props.schedule.map((schedule,index) => {
        let startTime = moment(schedule.start);
        let endTime = moment(schedule.end);
        let diff = endTime.diff(startTime, 'minutes');
        let programWidth = 5*diff - 1
        let hasfinished = endTime.isBefore(new Date(), "minutes");
        if(!hasfinished && liveProgramIndex===-1) {
            liveProgramIndex = index
        }
        return(
            <div key={index} className={index === liveProgramIndex ? "program live" : "program"} style={{minWidth:programWidth+"px"}}>
                <div  className="title">{schedule.title}</div>
                <div className="time">
                    {startTime.format("HH:mm")} - {endTime.format("HH:mm")}
                </div>
            </div>
        ) 
    })
    return (
        <>
            {schedule}
        </>
    )
}

export default Schedule

