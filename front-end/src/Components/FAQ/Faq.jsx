import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Faq.css'
import Footer from '../Footer/Footer'

export default function AccordionUsage() {
  return (
    <>
    <div className='faq'>
       <h1>Most Frequently Asked Questions</h1> 
      <Accordion className='accordion1'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Does Food deliver to my location?
        </AccordionSummary>
        <AccordionDetails>
        Yes, we offers online food delivery for your given location, you can order all your favorite food online.
        </AccordionDetails>
      </Accordion>
      <Accordion className='accordion2'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
           Can I get $0 delivery?
        </AccordionSummary>
        <AccordionDetails>
        Yes. To avoid paying delivery fees, You have to order food above $50.
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded className='accordion3'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Refund Policy
        </AccordionSummary>
        <AccordionDetails>
         To check all refund policy click here.
      </AccordionDetails>   
      </Accordion>
    </div>
    <Footer/>
    </>
  );
}