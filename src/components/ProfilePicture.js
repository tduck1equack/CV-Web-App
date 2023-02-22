import React from "react";
import "./ProfilePicture.css"
const Picture = (props) => {
    return (
        <div className="profile-container">
            <span className="main">
                <img className="image" src={props.source}></img>
            </span>
            <div className="traybar">
                <a className="link">{props.one}</a>
                <a className="link">{props.two}</a>
                <a className="link">{props.three}</a>
            </div>
        </div>
    )
}

export default Picture;