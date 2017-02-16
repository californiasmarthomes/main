import {render} from 'react-dom';

export default class Navbar extends React.Component {
  render () {
    return (
      <div className="navbar-fixed">
        <nav className="teal">
          <div className="nav-wrapper">
            <div className="row">
              <div className="col s12">
                <a href="#" className="brand-logo">Logo</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li><a href="sass.html">Some</a></li>
                  <li><a href="badges.html">Components</a></li>
                  <li><a href="collapsible.html">JavaScript</a></li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}