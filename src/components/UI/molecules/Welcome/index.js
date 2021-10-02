import React from 'react'
import person from "../../../../assets/svg/person.svg";
import "./welcome.css";
import { flag } from '../../../../assets/img';
import { makeStyles, Typography } from '@material-ui/core';
import useWindowSize from '../../../../hooks/windowsSizeHook';
import Search from '../Search';

const useStyles = makeStyles((theme) => ({
    dashboardTitle: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    textField: {
        marginTop: "40px",
        width: "100%"
    }
}));

const Welcome = () => {
    const [width] = useWindowSize();
    const classes = useStyles();
    return (
        <>
            {width > 770 ?
                <>
                    <div className="title">
                        <Typography className={classes.dashboardTitle} variant="h4">
                            Dashboard
                        </Typography>
                        <div className="english">
                            <span className="currently">Currently Learning</span>
                            <div className="bot-english">
                                <img className="flag" src={flag} alt="flag" />
                                <span className="p-english">English</span>
                            </div>
                        </div>
                    </div>
                    <div className="welcome-images">
                        <div className="person">
                            <img className="header-person-img" alt="person" src={person} />
                        </div>
                        <div>
                            <p className="img-text">Welcome back, Clarence</p>
                            <span className="img-text-span">Ta da! You're up to date</span>
                        </div>
                    </div>
                </>
                :
                <>
                    <Search/>
                    <div className="title">
                        <Typography className={classes.dashboardTitle} variant="h4">
                            Dashboard
                        </Typography>
                        <div className="english">
                            <span className="currently">Currently Learning</span>
                            <div className="bot-english">
                                <img className="flag" src={flag} alt="flag" />
                                <span className="p-english">English</span>
                            </div>
                        </div>
                    </div>
                    <div className="welcome-images-m">
                        <div className="person-m">
                            <img className="header-person-img" alt="person" src={person} />
                        </div>
                        <div className="center-text">
                            <p className="img-text-m">Welcome back, Clarence</p>
                            <span className="img-text-span-m">Ta da! You're up to date</span>
                        </div>
                    </div>
                </>}


        </>
    )
}

export default Welcome;