// Contact component
// =============================

import React    from 'react';
import DropDown from './drop-down.js'




export default class Contact extends React.Component { 

  constructor(props) {
    super(props);
    this.state = {
      title: 'Résumé',
      isOpen: false,
      id: 'contact'
    }
  }	

  // Toggle Menu Function
  toggle_menu(event) {
    this.setState({isOpen: !this.state.isOpen}); 
  }

  // All Click Functions Declared Here
  handle_click(event) { 
    this.toggle_menu(this);
  }    


  render() {
    return (
    	<section
        	id={this.state.id}
    		data-is-active={this.state.isOpen ? true : false}>
    		<DropDown 
    			data={this.state.title}    			
    			clickEvent={this.handle_click.bind(this)}/>
    		<main>	
          <header>
    			 <h2>Paige Keenan</h2>
           <h3><a href='tel:8179955467'>(817)995-5467</a></h3>
           <h3><a href='mailto:paigeinteractive@gmail.com'>PaigeInteractive@gmail.com</a></h3>
          </header> 

          <main>
            <h2>Experience</h2>
            <section>
              <h3>Razorifsh</h3>
              <h4>ATLANTA, GA &mdash; <a href='#'>Learn More</a></h4>
              <h5>Presentation Layer Engineer: January 2016 - Present</h5>
              <p>In this role, I have provided maintenance work on Bridgestone Tire's website, been a core member of the development team that launched Firestone Tire's latest rendition of their website, and joined the team of a large banking website where my role includes maintenance and configuring unit tests to better expedite and ensure quality code.</p>
            </section>

            <section>
              <h3>Razorifsh</h3>
              <h4>ATLANTA, GA &mdash; <a href='#'>Learn More</a></h4>
              <h5>Associate Presentation Layer Engineer: September 2014 - January 2016</h5>
              <p>As an associate level developer, I worked on the maintenance and measurements tracks of Bridgestone Tire's and Firestone Tire's websites, assisted in the complete redesign and infrastructure of Bridgestone Tire's latest rendition of their website, and worked on seasonal promotions under the Bridgestone Tire / Firestone Tire umbrella.</p>            
            </section>

            <section>
              <h3>100 Girls of Code</h3>
              <h4>ATLANTA, GA &mdash; <a href='#'>Learn More</a></h4>
              <h5>Atlanta Chapter Co-Founder: April 2015 - January 2016</h5>
              <p>My role included creation of lesson plans for girls aged 8 through 18 - lessons varying by age group, scouting of locations to host monthly web development learning camps, teaching an all female group of code-savy instructurs the monthly lesson plan, and being the lead instructor of each camp we hosted. Lesson plans taught included: HTML / CSS, basic computer science fundamentals, critical thinking excercises, Unity game development, Scratch software, CSS animations, intro to Python, and more.</p>            
            </section>  

            <section>
              <h3>JENI'S SPLENDID ICE CREAMS</h3>
              <h4>ATLANTA, GA &mdash; <a href='#'>Learn More</a></h4>
              <h5>Ice Cream Ambassador: September 2013 - September 2014</h5>
              <p>I scooped ice cream and taught people the importance of quality ingredients in order to make superior ice creams to endless lines of customers and absolutely loved it. You can ask me anything about ice cream. I know too much about ice cream.</p>            
            </section> 

            <h2>Education</h2>
            <section>
              <h3>THE CREATIVE CIRCUS</h3>
              <h4>ATLANTA, GA &mdash; <a href='#'>Learn More</a></h4>
              <h5>Interactive Development Student: October 2013 - September 2014</h5>
              <p>I learned the core concepts of front end development at an advertising school focused on both creating great designers and sought after developers. While at school, I learned basic front end, the Adobe Suite, frameworks including Angular JS, Vanilla JavaScript, Unity game development, and multiple animation libraries.</p>            
            </section>                       
          </main>  
    		</main>	
    	</section>	
    );
  }
}