import React from 'react';

// import Footer from '../Footer/Footer';

import './AboutPage.css';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div id="about">
      {/* <Footer /> */}
      <div id="technologies">
        <h2>Technologies used:</h2>
          <ul>
            <li>React</li>
            <li>React-Redux</li>
            <li>Redux-Saga</li>
            <li>Node.js</li>
            <li>PostgreSQL</li>
            <li>CSS Bootstrap</li>
            <li>Material UI</li>
          </ul>
        <h2>Coming soon:</h2>
          <ul>
            <li>Search</li>
            <li>Geolocation</li>
            <li>Chat</li>
          </ul>
        <h2>Thank you to:</h2>
          <ul>
            <li>The Dahl Cohort</li>
            <li>Matt Black</li>
            <li>Prime Digital Academy</li>
            <li>Friends and Family</li>
          </ul>
      </div>
    </div>
  );
}

export default AboutPage;
