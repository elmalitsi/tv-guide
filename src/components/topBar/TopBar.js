import React from 'react';
import {BsFillPersonFill,BsSearch} from "react-icons/bs";
import { IconContext } from "react-icons";

function TopBar() {
    return (
        <div className="header">
            <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
                <BsFillPersonFill/>
            </IconContext.Provider>
            <div>logo</div>

            <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
                <BsSearch/>
            </IconContext.Provider>
        </div>
    )
}

export default TopBar
