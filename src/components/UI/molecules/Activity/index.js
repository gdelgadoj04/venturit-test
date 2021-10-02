import { Accordion, AccordionDetails, AccordionSummary, Icon, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { followers, events, assignments } from '../../../../assets/img';
import { IconArrowDown } from '../../../../assets/img';
import useWindowSize from '../../../../hooks/windowsSizeHook';
import "./activity.css";
const useStyles = makeStyles((theme) => ({
    heading: {
        paddingLeft: "5px",
        color: "#A7A5BD",
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
    },
}));

const Activity = () => {
    const [width] = useWindowSize();
    const classes = useStyles();
    return (
        <> {width > 770 ?
            <>
                <div className="activity-header">
                    <Typography variant="h4">
                        Activity
                    </Typography>
                </div>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<Icon><img className="icon-accordion" src={IconArrowDown} alt="" /></Icon>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <img className="img-accordion" src={followers} alt="followers" />
                        <Typography className={classes.heading}>You have new 5 followers including <span className="follower"> Kathryn Crawford</span> and <span className="follower">Piper Shaw</span></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<Icon><img className="icon-accordion" src={IconArrowDown} alt="" /></Icon>}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <img className="img-accordion" src={events} alt="followers" />
                        <Typography className={classes.heading}>3 new events were added to your calendar</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion >
                    <AccordionSummary
                        expandIcon={<Icon><img className="icon-accordion" src={IconArrowDown} alt="" /></Icon>}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                    >
                        <img className="img-accordion" src={assignments} alt="followers" />
                        <Typography className={classes.heading}>You have 3 pending reading to complete</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </>
            : <>
                <div className="activity-header-m">
                    <Typography variant="h4">
                        Activity
                    </Typography>
                </div>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<Icon><img className="icon-accordion-m" src={IconArrowDown} alt="" /></Icon>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <img className="img-accordion-m" src={followers} alt="followers" />
                        <Typography className={classes.heading}>You have new 5 followers including Kathryn Crawford and Piper Shaw</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<Icon><img className="icon-accordion-m" src={IconArrowDown} alt="" /></Icon>}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <img className="img-accordion-m" src={events} alt="followers" />
                        <Typography className={classes.heading}>3 new events were added to your calendar</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion >
                    <AccordionSummary
                        expandIcon={<Icon><img className="icon-accordion-m" src={IconArrowDown} alt="" /></Icon>}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                    >
                        <img className="img-accordion-m" src={assignments} alt="followers" />
                        <Typography className={classes.heading}>You have 3 pending reading to complete</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </>
        }
        </>
    )
}

export default Activity;