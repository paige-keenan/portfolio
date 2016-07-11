// About Page
// =============================

import React from 'react';

export default class About extends React.Component {   	

  render() {
    return (
    	<section id='about'>
    		<header>
        		<h2>Hello.</h2>  
        		<h3>I'm Paige Keenan, and I'm a Front End Developer at Razorfish in Atlanta, GA.</h3>
        	</header>	
        	<main>
        		<p>I was raised in Texas. It's there that I learned that when you give your word there are no takebacks, that true joy is sitting in a swing on the front porch or taking a dip in Barton Springs, and to always say "Please," "Thank You," and "Yes ma'am."</p>
        		<p>Within web development, I'm passionate about animations, clean code, and out there designs with smart UX.</p>
        		<p>Outside of web development, I enjoy running, rock climbing, and candle making in my kitchen.</p>
        	</main>
        </section>	
    );
  }
}