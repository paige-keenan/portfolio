// Home Page
// =============================

import React     from 'react'
import {Link}    from 'react-router'
import Header    from './header';
import List      from './list';
import NewWork   from './new-work';

export default React.createClass({
  render() {
    return (
      <section>
        <Header />
        <nav>
        	<List />
        </nav>	
        <section>
          <NewWork />
        </section>
      </section>
    )
  }
})