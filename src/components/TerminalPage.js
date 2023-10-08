import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Typography, Accordion, AccordionSummary, AccordionDetails, List, ListItem, ListItemText, Stack } from '@mui/material';
import commandData from '../data/cmdline';

function TerminalPage() {


    return (
        <Stack pt={2} pb={10} width='90%'>
            <Typography variant="h4" fontWeight={700} textAlign='center' gutterBottom>
                CLI -H
            </Typography>
            <Typography variant="body1" paragraph>
                A simple page with title, description, and accordion.
            </Typography>

            {commandData.map((cmd, idx) => (
                <Accordion key={idx}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`panel${idx}-content`}
                        id={`panel${idx}-header`}
                    >
                        <Typography variant="h6" fontWeight={600}>{cmd.cmdline}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div>
                            <Typography variant="body1">
                                {cmd.description}
                            </Typography>
                            <List>
                                {cmd.args.map((arg, argIdx) => (
                                    <ListItem key={argIdx}>
                                        <ListItemText primary={arg.flag} secondary={arg.description} />
                                    </ListItem>
                                ))}
                            </List>
                        </div>
                    </AccordionDetails>
                </Accordion>
            ))}
        </Stack>
    );
}

export default TerminalPage;
