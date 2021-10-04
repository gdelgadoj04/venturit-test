import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import "./progress.css";
import useWindowSize from '../../../../hooks/windowsSizeHook';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    progress: {
        paddingTop: "4%"
    },
    miniCards: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    }
});

const Progress = () => {
    const classes = useStyles();
    const [width] = useWindowSize();
    return (
        <>{width > 770 ?
            <Grid container className={classes.progress}>
                <Grid item xs={5}>
                    <div className="progress-overview">
                        <span className="progress-text">Progress overview</span>
                        <div className="progress-percent">
                            <svg className="progress-circle">
                                <circle cx="80" cy="80" r="80"></circle>
                                <circle cx="80" cy="80" r="80"></circle>
                            </svg>
                            <span className="percent-text">40<span className="percent-symbol">%</span></span>
                        </div>
                        <div className="completed-box">
                            <div className="completed-content">
                                <span className="completed">Completed</span>
                                <span className="hours">20 <span className="left">hours</span></span>
                            </div>
                            <div className="left-content">
                                <span className="left-to-go">Left to go</span>
                                <span className="hours">30 <span className="left">hours</span></span>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid className={classes.miniCards} item xs={7}>
                    <Typography variant="h4">
                        Progress
                    </Typography>
                    <div className="row-progress">
                        <div className="mini-card">
                            <span className="total">Total Webinars</span>
                            <span className="number-hour">9</span>
                        </div>
                        <div className="mini-card">
                            <span className="total">Pending Assigments</span>
                            <span className="number-hour">0</span>
                        </div>
                        <div className="mini-card">
                            <span className="total">Total units</span>
                            <span className="number-hour">5</span>
                        </div>
                    </div>
                    <div className="row-progress">
                        <div className="mini-card">
                            <span className="total">Total reading</span>
                            <span className="number-hour">14</span>
                        </div>
                        <div className="mini-card active-card">
                            <span className="total active-text">Total videos</span>
                            <span className="number-hour">5</span>
                        </div>
                    </div>
                    <div className="footer">
                        <span className="footer-text">Confirm your account details
                            <span className="footer-confirm">Please confirm your email and phone number.
                            </span>
                        </span>
                    </div>
                </Grid>
            </Grid>
            : <>
                <div className="progress-overview-m">
                    <span className="progress-text m-text">Progress overview</span>
                    <div className="progress-percent">
                        <svg className="progress-circle-m">
                            <circle cx="70" cy="70" r="70"></circle>
                            <circle cx="70" cy="70" r="70"></circle>
                        </svg>
                        <span className="percent-text">40<span className="percent-symbol">%</span></span>
                    </div>
                    <div className="completed-box-m">
                        <div className="completed-content">
                            <span className="completed">Completed</span>
                            <span className="hours-m">20 <span className="left">hours</span></span>
                        </div>
                        <div className="left-content">
                            <span className="left-to-go">Left to go</span>
                            <span className="hours-m">30 <span className="left">hours</span></span>
                        </div>
                    </div>
                </div>

                <>
                    <Typography variant="h4">
                        Progress
                    </Typography>
                    <div className="column-progress">
                        <div className="row-progress">
                            <div className="mini-card-m">
                                <span className="total">Total Webinars</span>
                                <span className="number-hour-m">9</span>
                            </div>
                            <div className="mini-card-m">
                                <span className="total">Pending Assigments</span>
                                <span className="number-hour-m"></span>
                            </div>
                        </div>
                        <div className="row-progress">
                            <div className="mini-card-m">
                                <span className="total">Total reading</span>
                                <span className="number-hour-m">14</span>
                            </div>
                            <div className="mini-card-m active-card">
                                <span className="total active-text">Total videos</span>
                                <span className="number-hour-m"></span>
                            </div>
                        </div>
                        <div className="row-progress">
                            <div className="mini-card-m">
                                <span className="total">Total units</span>
                                <span className="number-hour-m">5</span>
                            </div>
                        </div>
                        <div className="footer-m">
                            <span className="footer-text-m">Confirm your account details
                                <span className="footer-confirm-m">Please confirm your email and phone number.
                                </span>
                            </span>
                        </div>
                    </div>
                </>
            </>
        }</>
    )
}

export default Progress;