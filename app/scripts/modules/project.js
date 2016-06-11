// Project component
// =============================

import React from 'react';

export default class Link_Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }


  // Nav List Item Renderer
  render() {
	const link = this.props.details;

    return(  
		<section>
			<h3>{link.title}</h3>
			<p>{link.department}</p>
			<figure>
				<img src={link.image} alt={link.imageAlt} />
			</figure>	
		</section>
    );  
  }
}



export default class Project extends React.Component { 

  constructor(props) {
    super(props);
    this.state = {
      linkInfo: this.props.data
    }
    this.render_link_info = this.render_link_info.bind(this);
  }

  render_link_info(key) {
    return( 
      <Link_Item 
        key={key} 
        details={this.state.linkInfo[key]}/>
    );  
  }  


  render() {
    return (
      <main>
		{Object.keys(this.state.linkInfo).map(this.render_link_info)} 
      </main>
    );
  }
}