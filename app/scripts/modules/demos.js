// New Work component
// =============================

import React    from 'react';
import DropDown from './drop-down.js'
import Project  from './project.js'
import DemoItem from './demo-item.js'

export default class NewWork extends React.Component { 

  constructor(props) {
    super(props);
    this.state = {
      title: 'Demos',
      isOpen: false,
      id: 'demos'
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
        <DemoItem />
    	</section>	
    );
  }
}