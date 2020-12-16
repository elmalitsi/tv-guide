import React, {useState, useEffect} from 'react';
import moment from 'moment';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import Slider from "react-slick";

function Day() {
    const [days, setDays] = useState([])
    const [selectedDay, setSelectedDay] = useState(null)
    useEffect(() => {
        let daysArray = [
            {
                id: 1,
                day: moment().subtract(3, 'day').format('dddd').substring(0, 3),
                month: moment().subtract(3, 'day').format('D/M')
            },
            {
                id: 2,
                day: moment().subtract(2, 'day').format('dddd').substring(0, 3),
                month: moment().subtract(2, 'day').format('D/M')
            },
            {
                id: 3,
                day: moment().subtract(1, 'day').format('dddd').substring(0, 3),
                month: moment().subtract(1, 'day').format('D/M')
            },
            {
                id: 4,
                day: moment().format('dddd D/M').substring(0, 3),
                month: moment().format('D/M')
            },
            {
                id: 5,
                day: moment().add(1, 'day').format('dddd').substring(0, 3),
                month: moment().add(1, 'day').format('D/M')
            },
            {
                id: 6,
                day: moment().add(2, 'day').format('dddd').substring(0, 3),
                month: moment().add(2, 'day').format('D/M')
            },
            {
                id: 7,
                day: moment().add(3, 'day').format('dddd').substring(0, 3),
                month: moment().add(3, 'day').format('D/M')
            }
        ]
        setSelectedDay(5)
        setDays(daysArray)
    }, [])
    
    const DayItem = ({day,month, selected}) => {
        return <div
          className={`day-item ${selected ? 'active' : ''}`}
          >{day}<br/>{month}</div>;
    };

    const Menu = (days, selected) =>
        days.map(day => {
            return <DayItem day={day.day} month={day.month} key={day.id} selected={selected} />;
    });

    const onSelect =(e)=>{
        setSelectedDay(e)
    }
    return (
        <ScrollMenu
            data={Menu(days)}
            selected={selectedDay}
            onSelect={onSelect}
        />
    )
}

export default Day
