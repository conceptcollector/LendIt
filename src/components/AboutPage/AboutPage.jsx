import React from 'react';

// import Footer from '../Footer/Footer';

import './AboutPage.css';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="about-wrapper">
      <div className="about-one">
        {/* <div></div> */}
        {/* <Footer /> */}
      </div>
      <div className="about-box">
        <h2>Technologies used:</h2>
        <ul></ul>
          <li>React</li>
          <li>React-Redux</li>
          <li>Redux-Saga</li>
          <li>Node.js</li>
          <li>PostgreSQL</li>
          <li>CSS Bootstrap</li>
          <li>Material UI</li>
        <p>Thank you to:</p>
          <li>The Dahl Cohort</li>
          <li>Matt Black</li>
          <li>Prime Digital Academy</li>
          <li>Friends and Family</li>
      </div>
    </div>
  );
}

export default AboutPage;
