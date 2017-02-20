import {render} from 'react-dom';
import SlideImg1 from '../images/intro_background.jpg';

export default class Intro extends React.Component {
  render () {
    return (
      <div className="slider">
        <ul className="slides">
          <li>
            <img src={SlideImg1}/>
            <div className="caption center-align">
              <h3>Bring the Smarts into your Home</h3>
              <h5 className="light grey-text text-lighten-3">California Smart Home. Installation and Technology Consulting.</h5>
            </div>
          </li>
          <li>
            <img src={SlideImg1}/>
            <div className="caption right-align">
              <h3>Remodeling</h3>
              <h5 className="light grey-text text-lighten-3">No project is too big or too small.</h5>
            </div>
          </li>
          <li>
            <img src={SlideImg1}/>
            <div className="caption center-align">
              <h3>Technology Consulting</h3>
              <h5 className="light grey-text text-lighten-3">Guiding your through the complex of Smart Home options.</h5>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}