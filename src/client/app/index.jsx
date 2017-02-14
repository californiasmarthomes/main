import React from 'react';
import classnames from 'classnames';
import {render} from 'react-dom';

require('./stylesheets/main.scss');

class App extends React.Component {
  render () {
    return (
      <div className="navbar-fixed">
        <div className="row">
          <nav className="teal">
            <div className="nav-wrapper">
                <div className="col s12">
                  <a href="#" className="brand-logo">Logo</a>
                  <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="sass.html">Sass</a></li>
                    <li><a href="badges.html">Components</a></li>
                    <li><a href="collapsible.html">JavaScript</a></li>
                  </ul>
                </div>
            </div>
          </nav>
        </div>
      </div>
      );
  }
}

render(<App/>, document.getElementById('app'));
