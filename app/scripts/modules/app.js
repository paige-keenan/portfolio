// Home Page
// =============================

import React     from 'react'
import {Link}    from 'react-router'
import Header    from './header';
import List      from './list';
import NewWork   from './new-work';
import OldWork   from './old-work';

export default React.createClass({
  render() {
    return (
      <section>
        <Header />
        <nav>
        	<List />
        </nav>	
        <main>
          <NewWork />
          <OldWork />
        </main>
      </section>
    )
  }
})