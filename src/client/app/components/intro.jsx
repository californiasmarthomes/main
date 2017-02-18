import {render} from 'react-dom';

export default class Intro extends React.Component {
  render () {
    return (
      <div className="intro">
        <div className="row">
          <div className="overlay">
            <div className="title col s12 hide-on-large-only">
                Bring the Smarts to your Home
            </div>
            <div className="title col s12 hide-on-med-and-down">
                Bring the Smarts to your Home
            </div>
            <div className="container content">
              <p>Smart Home installation by a knowledgeable local professional.</p>
              <p>Located in Saint Helena, CA and serving the greater Napa area.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}