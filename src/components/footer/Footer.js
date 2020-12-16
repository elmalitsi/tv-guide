import React from 'react'
import {BsHouseDoorFill,BsFillCollectionPlayFill,BsListTask} from "react-icons/bs";
import {FaBookReader, FaTv} from "react-icons/fa";
import { IconContext } from "react-icons";


function Footer(props) {
    return (
        <div className="footer">
            <IconContext.Provider value={{ color: "white", className: "footer-icon footer-icon-1" }}>
                <BsHouseDoorFill/>
            </IconContext.Provider>
            <IconContext.Provider value={{ color: "white", className: "footer-icon footer-icon-2" }}>
                <BsFillCollectionPlayFill/>
            </IconContext.Provider>
            <IconContext.Provider value={{ color: "yellow", className: "footer-icon footer-icon-3" }}>
                <BsListTask/>
            </IconContext.Provider>
            <IconContext.Provider value={{ color: "white", className: "footer-icon footer-icon-4" }}>
                <FaTv/>
            </IconContext.Provider>
            <IconContext.Provider value={{ color: "white", className: "footer-icon footer-icon-5" }}>
                <FaBookReader/>
            </IconContext.Provider>
        </div>
    )
}


export default Footer

