import React, { useState } from 'react';
import './MenusAccordion.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Accordion({ title, children, imageUrl }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <span><h2>{title}</h2></span> <span><KeyboardArrowDownIcon/></span>
      </div>
      {isOpen && (
        <div className="accordion-content">
          <div className="accordion-text">
            {children}
          </div>
          <div className="accordion-images-wrapper">
            <img src={imageUrl} alt="" className="accordion-image" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Accordion;
