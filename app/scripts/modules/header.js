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
		event.target.setAttribute('class', 'active');
		document.getElementById(currentId).setAttribute('class', 'active');
	}  	

  render() {
    return (
      <header>
        <h1>Paige Keenan</h1>
        <section>
	        <h2>I'm a Front-end Developer at Razorfish in Atlanta, GA.</h2>
	        <p>My goal is to farther my craft everyday.</p>
	        <p>I want to work on projects that push me and force me out of my comfort zone.</p>
	        <p>I want to be a team player and a solid teammate on all projects I work on.</p>
	        <p>My work below illustrates these pursuits.</p>
	    </section>
	    <nav>
	    	<ul>
	    		<li><h3><a className='active' href='new-work' onClick={this.handle_click.bind(this)}>New Work</a></h3></li>
	    		<li><h3><a href='old-work' onClick={this.handle_click.bind(this)}>Old Work</a></h3></li>
	    		<li><h3><a href='demos' onClick={this.handle_click.bind(this)}>Demos</a></h3></li>
	    		<li><h3><a href='contact' onClick={this.handle_click.bind(this)}>Résumé</a></h3></li>
	    	</ul>
	    	<a href='about'>About</a>
	    </nav>    
      </header>
    );
  }
}