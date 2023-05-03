import React from 'react';
import './Resume.css';

function Resume() {
  return (
    <div className="iframe-container">
      <iframe src="/assets/cv.pdf" title="Resume" />
    </div>
  );
}

export default Resume;