import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { Carousel } from 'react-bootstrap';
import { carousel, eventsTwo } from '../../../../assets/img';
import Typography from '../../atoms/Typography';
import "./events.css";
const useStyles = makeStyles((theme) => ({
    eventsToday: {
        paddingLeft: '15px'
    }
}));

const Events = () => {
    const classes = useStyles();
    return (
        <>
            <div className="events-header">
                <Typography variant="header">
                    Events
                </Typography>
            </div>
            <Grid container>
                <Grid item xs={8}>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={carousel}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h2>Youth Talent & Education</h2>
                                <h2>May 20</h2>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={carousel}
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={carousel}
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Grid>
                <Grid item xs={4} className={classes.eventsToday}>
                    <p className="p-events-today">EVENTS TODAY</p>
                    <div className="events-today">
                        <img className="eventtoday one" alt="eventone" src={eventsTwo} />
                        <img className="eventtoday two" alt="eventtwo" src={eventsTwo} />
                    </div>
                </Grid>
            </Grid>
        </>
    )
}

export default Events;