// Home Page
// =============================

import React  from 'react'
import {Link} from 'react-router'
import Header from './header';
import List   from './list';

export default React.createClass({
  render() {
    return (
      <section>
        <Header />
        <nav>
        	<List />
        </nav>	
      </section>
    )
  }
})