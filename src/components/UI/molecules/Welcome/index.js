import React from 'react'
import Typography from '../../atoms/Typography';
import header from "../../../../assets/svg/header.svg";
import person from "../../../../assets/svg/person.svg";
import "./welcome.css";
const Welcome = () => {
    return (
        <>
            <div id="welcome-web">
                <Typography variant="header">
                    Dashboard
                </Typography>
                <br />
                <div className="welcome-images">
                    <img className="header-img" alt="blue-background" src={header} />
                    <img className="header-person-img" alt="person" src={person} />
                </div>
            </div>
            <div id="welcome-mobile">

            </div>

        </>
    )
}

export default Welcome;