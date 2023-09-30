import * as React from 'react';
import Typography from '@mui/material/Typography';
import Accordion from './YourAccordionPath';  // Assuming the above accordion code is saved in a separate file named 'YourAccordionPath.js'
import AccordionSummary from './YourAccordionSummaryPath';
import AccordionDetails from './YourAccordionDetailsPath';

function AssetsAccordion({ assets }) {
    const [expanded, setExpanded] = React.useState(null);

    const handleChange = (assetId) => (event, newExpanded) => {
        setExpanded(newExpanded ? assetId : null);
    };

    return (
        <div>
            {assets.map((asset, index) => (
                <Accordion
                    key={index}
                    expanded={expanded === asset.id}
                    onChange={handleChange(asset.id)}
                >
                    <AccordionSummary aria-controls={`${asset.id}-content`} id={`${asset.id}-header`}>
                        <Typography>{asset.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <div>
                            {asset.items.map((item, itemIndex) => (
                                <Typography key={itemIndex}>
                                    {item}
                                </Typography>
                            ))}
                        </div>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
}

export default AssetsAccordion;
