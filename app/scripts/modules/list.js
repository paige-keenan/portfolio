// List component
// =============================

import React  from 'react';
import {Link} from 'react-router'

export default class List extends React.Component { 

  render() {
    return (
        <ul role="nav">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
    );
  }
}