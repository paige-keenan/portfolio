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
    			<h1>Resume goes here</h1>
    		</main>	
    	</section>	
    );
  }
}