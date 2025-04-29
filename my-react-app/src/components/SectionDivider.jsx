import React from 'react';
import './Sections.css';

const SectionDivider = ({ type = 'wave' }) => {
  return (
    <div className={`section-divider ${type}`}>
      <div className="divider-content"></div>
    </div>
  );
};

export default SectionDivider;
