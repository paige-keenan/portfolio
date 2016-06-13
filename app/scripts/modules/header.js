// Header component
// =============================

import React from 'react';

export default class Header extends React.Component { 


	// All Click Functions Declared Here
	handle_click(event) { 
		event.preventDefault();
		var siblings = document.querySelectorAll(".active");
		[].forEach.call(siblings, function(el) {
   			 el.classList.remove("active");
		});
		var currentId = event.target.getAttribute('href')
		document.getElementById(currentId).setAttribute('class', 'active');
	}  	

  render() {
    return (
      <header>
        <h1>Erin Stevens</h1>
        <p>Art Director</p>
        <nav>
	        <a  href='new-work'
	        	onClick={this.handle_click.bind(this)}>
	        	New Work
	        </a>
	        <a  href='old-work' 
	        	onClick={this.handle_click.bind(this)}>
	        	Old Work
	        </a>
	    </nav>    
      </header>
    );
  }
}