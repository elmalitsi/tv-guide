import React from 'react';
import {BsStarFill} from "react-icons/bs";
import { IconContext } from "react-icons";

const favoriteStyles = {
    'width': '50px',
    'position': 'relative',
    'height': '60px',
    'display': 'table',
    'boxShadow': '7px 1px 5px -2px rgba(0,0,0,0.93)',
    'zIndex': '100',
    'backgroundColor': '#3a3a3a'
}

const favoriteSvg = {
    'color': 'white',
    'position': 'absolute',
    'top': '50%',
    'marginRight': '-50%',
    'transform': 'translate(-50%, -50%)',
    'left': '50%'
}

function Favorite() {
    return (
        <div style={favoriteStyles}>
            <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
                <BsStarFill style={favoriteSvg}/>
            </IconContext.Provider>
        </div>
    )
}

export default Favorite
