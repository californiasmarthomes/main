import React from 'react';
import classnames from 'classnames';
import {render} from 'react-dom';

require('./stylesheets/main.scss');

class App extends React.Component {
  render () {
    return (
      <div className="row">
        <div className="col s6 blue sdhello">hellsfsdsdo again!</div>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
