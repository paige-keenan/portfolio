// New Work component
// =============================

import React    from 'react';
import DropDown from './drop-down.js'
import Project  from './project.js'

const nav_data = {
	project1: {title: "Firestone Tire",              department: "Development", image: "media/images/firestone-hero.jpg",   imageAlt: "Car driving down road"},
	project2: {title: "Bridgestone Tire",            department: "Development", image: "media/images/bridgestone-hero.jpg", imageAlt: "lksjdfv"},
	project3: {title: "Jeni\'s Splendid Ice Creams App", department: 'Development & Design', image: "media/images/jenis-hero.jpg", imageAlt: "lksjdf"}
}

export default class NewWork extends React.Component { 

  constructor(props) {
    super(props);
    this.state = {
      title: 'New Work',
      isOpen: true,
      id: 'new-work'
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
    		<Project
    			data={nav_data}/>
    	</section>	
    );
  }
}