// Home Page
// =============================

import React     from 'react'
import {Link}    from 'react-router'
import Header    from './header';
import List      from './list';
import NewWork   from './new-work';
import OldWork   from './old-work';
import Contact   from './contact';
import Demos     from './demos';
import About     from './about';

const nav_data_old = {
  project1: {title: 'Google Maps & Bands in Town API Integration',   department: 'Web Development',          image: 'media/images/maps-hero.jpg',           imageAlt: 'Map of Austin'},
  project2: {title: 'Atlanta Humane Society',                        department: 'Web Development & Design', image: 'media/images/humane-society-hero.jpg', imageAlt: 'Puppies and Kittens on Lawn'},
  project3: {title: 'Kotori',                                        department: 'Game Development',         image: 'media/images/kotori-hero.jpg',         imageAlt: 'Video game character jumping'}
}

const nav_data_new = {
  project1: {title: "Firestone Tire",                  department: "Web Development",          image: "media/images/firestone-hero.jpg",   imageAlt: "Car driving down road"},
  project2: {title: "Bridgestone Tire",                department: "Web Development",          image: "media/images/bridgestone-hero.jpg", imageAlt: "Tire surrounded by city"},
  project3: {title: "Jeni\'s Splendid Ice Creams App", department: 'App Development & Design', image: "media/images/jenis-hero.jpg",       imageAlt: "Hand holding ice cream"}
}


export default React.createClass({
  render() {
    return (
      <section>
        <Header 
            data-new={nav_data_new}
            data-old={nav_data_old}/>	
        <main>
          <About />
          <NewWork 
            data={nav_data_new}/>
          <OldWork 
            data={nav_data_old}/>
          <Demos 
            data={nav_data_new}/>  
          <Contact />
        </main>
      </section>
    )
  }
})