import React from 'react';
import { Card, CardContent, Grid, makeStyles, Typography } from '@material-ui/core';
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
    }
});

const Progress = () => {
    const classes = useStyles();
    const [width] = useWindowSize();
    return (
        <>{width > 770 ?
            <Grid container className={classes.progress}>
                <Grid item xs={4}>
                    <div className="progress-overview">

                    </div>
                </Grid>
                <Grid item xs={8}>
                    <div>
                        <Typography variant="h4">
                            Progress
                        </Typography>
                        <Card className={classes.root} variant="outlined">
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Word of the Day
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    asfsd
                                </Typography>
                                <Typography className={classes.pos} color="textSecondary">
                                    adjective
                                </Typography>
                                <Typography variant="body2" component="p">
                                    well meaning and kindly.
                                    <br />
                                    {'"a benevolent smile"'}
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card className={classes.root} variant="outlined">
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Word of the Day
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    asfasd
                                </Typography>
                                <Typography className={classes.pos} color="textSecondary">
                                    adjective
                                </Typography>
                                <Typography variant="body2" component="p">
                                    well meaning and kindly.
                                    <br />
                                    {'"a benevolent smile"'}
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card className={classes.root} variant="outlined">
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Word of the Day
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    asfs
                                </Typography>
                                <Typography className={classes.pos} color="textSecondary">
                                    adjective
                                </Typography>
                                <Typography variant="body2" component="p">
                                    well meaning and kindly.
                                    <br />
                                    {'"a benevolent smile"'}
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                </Grid>
            </Grid>
            : <>
                <div className="progress-overview-m">
                    <span className="progress-text">Progress overview</span>
                    <div className="progress-percent">
                        <span className="percent-text">40%</span>
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

                <>
                    <Typography variant="h4">
                        Progress
                    </Typography>
                    <div className="row-progress">
                        <div className="mini-card">
                            <span className="total">Total Webinars</span>
                            <span className="p-english">9</span>
                        </div>
                        <div className="mini-card">
                            <span className="total">Pending Assigments</span>
                            <span className="p-english"></span>
                        </div>
                    </div>
                    <div className="row-progress">
                        <div className="mini-card">
                            <span className="total">Total reading</span>
                            <span className="p-english">14</span>
                        </div>
                        <div className="mini-card active-card">
                            <span className="total active-text">Total videos</span>
                            <span className="p-english"></span>
                        </div>
                    </div>
                    <div className="row-progress">
                        <div className="mini-card ">
                            <span className="total">Total units</span>
                            <span className="p-english">5</span>
                        </div>
                    </div>
                </>
            </>
        }</>
    )
}

export default Progress;