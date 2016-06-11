// Drop Down component
// =============================

import React   from 'react';
import Project from './project.js'

export default class DropDown extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
    }
  }	

  render() {
    return (
    	<header>
    		<button 
    			onClick={this.props.clickEvent}>
    			{this.props.data}
    		</button>
    	</header>
    );
  }
}