import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { Carousel } from 'react-bootstrap';
import { carousel, evenstOne, eventsTwo } from '../../../../assets/img';
import useWindowSize from '../../../../hooks/windowsSizeHook';
import Typography from '../../atoms/Typography';
import "./events.css";
const useStyles = makeStyles((theme) => ({
    eventsToday: {
        paddingLeft: '15px'
    }
}));

const Events = () => {
    const [width] = useWindowSize();
    const classes = useStyles();
    return (
        <>{width > 770 ?
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
                                <span className="type">SCIENCE</span>
                                <img
                                    className="d-block w-100"
                                    src={carousel}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <span className="carousel-text-left">Youth Talent & Education</span>
                                    <span className="carousel-text-right">May 20</span>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <span className="type">SCIENCE</span>
                                <img
                                    className="d-block w-100"
                                    src={carousel}
                                    alt="Second slide"
                                />

                                <Carousel.Caption>
                                    <span className="carousel-text-left">Youth Talent & Education</span>
                                    <span className="carousel-text-right">May 20</span>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <span className="type">SCIENCE</span>
                                <img
                                    className="d-block w-100"
                                    src={carousel}
                                    alt="Third slide"
                                />

                                <Carousel.Caption>
                                    <span className="carousel-text-left">Youth Talent & Education</span>
                                    <span className="carousel-text-right">May 20</span>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Grid>
                    <Grid item xs={4} className={classes.eventsToday}>
                        <p className="p-events-today">EVENTS TODAY</p>
                        <div className="events-today">
                            <div className="one">
                                <img className="eventtoday" alt="eventone" src={evenstOne} />
                                <div className="event-info">
                                    <span className="hour">10:30AM</span>
                                    <span className="text-event">Webinar: the basics of...</span>
                                </div>
                            </div>
                            <div className="two">
                                <img className="eventtoday" alt="eventtwo" src={eventsTwo} />
                                <div className="event-info">
                                    <span className="hour">2:15PM</span>
                                    <span className="text-event">Team Building Activity</span>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </>
            :
            <>
                <div className="events-header-m">
                    <Typography variant="header">
                        Events
                    </Typography>
                </div>
                <Grid container>
                    <Grid item xs={12}>
                        <Carousel className="carousel-m">
                            <Carousel.Item className="carousel-item-m">
                                <span className="type">SCIENCE</span>
                                <img
                                    className="d-block w-100 carousel-img-m"
                                    src={carousel}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <span className="carousel-text-left">Youth Talent & Education</span>
                                    <span className="carousel-text-right">May 20</span>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item className="carousel-item-m">
                                <span className="type">SCIENCE</span>
                                <img
                                    className="d-block w-100 carousel-img-m"
                                    src={carousel}
                                    alt="Second slide"
                                />

                                <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item className="carousel-item-m">
                                <span className="type">SCIENCE</span>
                                <img
                                    className="d-block w-100 carousel-img-m"
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
                    <Grid item xs={12} className={classes.eventsToday}>
                        <p className="p-events-today-m">EVENTS TODAY</p>
                        <div className="events-today-m">
                            <div className="one-m">
                                <img className="eventtoday" alt="eventone" src={evenstOne} />
                                <span className="hour">10:30AM</span>
                                <span className="text-event">Webinar: the basics of...</span>
                            </div>
                            <div className="two-m">
                                <img className="eventtoday" alt="eventtwo" src={eventsTwo} />
                                <span className="hour">2:15PM</span>
                                <span className="text-event">Team Building Activity</span>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </>}

        </>
    )
}

export default Events;