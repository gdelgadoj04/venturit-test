import { Accordion, AccordionDetails, AccordionSummary, Icon, makeStyles } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import React from 'react';
import Typography from '../../atoms/Typography';
import ArrowDown from '../../../../assets/svg/arrowdown.svg';
import "./activity.css";
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    }
}));

const Activity = () => {
    const classes = useStyles();
    return (
        <>
            <Typography variant="header">
                Activity
            </Typography>
            <Accordion>
                <AccordionSummary
                    expandIcon={<Icon><img src={ArrowDown} alt="" /></Icon>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>You have new 5 followers including <span> Kathryn Crawford</span> and <span>Piper Shaw</span></Typography>
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
                    expandIcon={<ExpandMore />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
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
                    expandIcon={<ExpandMore />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography className={classes.heading}>You have 3 pending reading to complete</Typography>
                </AccordionSummary>
            </Accordion>
        </>
    )
}

export default Activity;