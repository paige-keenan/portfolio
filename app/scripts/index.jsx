// Index Component
// =============================

import React         from 'react';
import ReactDOM      from 'react-dom';

export default class Index extends React.Component {

  // Set Inital State and Properties here
  constructor(props) {
    super(props);
  } 

  // Menu Renderer
  render() {
    return (
      <header>
        <h1>Paige Keenan Portfolio</h1>  
      </header>
    );
  }
}


ReactDOM.render(
  <Index />, 
  document.getElementById('app')
);