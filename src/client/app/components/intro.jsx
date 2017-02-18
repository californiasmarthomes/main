import {render} from 'react-dom';

export default class Intro extends React.Component {
  render () {
    return (
      <div className="intro">
        <div className="row">
          <div className="overlay">
            <div className="title col s12">
                Bring the Smarts to your Home
            </div>
            <div className="container content">
              <p>Smart Home installation by a knowledgeable local professional.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}