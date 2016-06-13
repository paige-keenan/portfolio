// New Work component
// =============================

import React    from 'react';
import DropDown from './drop-down.js'
import Project  from './project.js'

const nav_data = {
  project1: {title: 'Google Maps & Bands in Town API Integration',   department: 'Development',          image: 'media/images/maps-hero.jpg',           imageAlt: 'Map of Austin'},
  project2: {title: 'Atlanta Humane Society',                        department: 'Development & Design', image: 'media/images/humane-society-hero.jpg', imageAlt: 'Puppies and Kittens on Lawn'},
  project3: {title: 'Kotori',                                        department: 'Development',          image: 'media/images/kotori-hero.jpg',         imageAlt: 'Video game character jumping'}
}

export default class OldWork extends React.Component { 

  constructor(props) {
    super(props);
    this.state = {
      title: 'Old Work',
      isOpen: false,
      id: 'old-work'
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