import {render} from 'react-dom';
import SlideImg1 from '../images/tv.jpg';
import SlideImg2 from '../images/livingroom.jpg';
import SlideImg3 from '../images/internet.jpg';

export default class Intro extends React.Component {
  render () {
    return (
      <div className="intro slider">
        <ul className="slides">
          <li>
            <img src={SlideImg1}/>
            <div className="caption left-align">
              <div className="title">Bring the Smarts into your Home</div>
              <div className="content light grey-text text-lighten-3">Installation and Technology Consulting</div>
            </div>
          </li>
          <li>
            <img src={SlideImg2}/>
            <div className="caption right-align">
              <div className="title">Remodeling</div>
              <div className="content light grey-text text-lighten-3">No project is too big or too small</div>
            </div>
          </li>
          <li>
            <img src={SlideImg3}/>
            <div className="caption left-align">
              <div className="title">Technology Consulting</div>
              <div className="content light grey-text text-lighten-3">Guiding your through the complex world of Smart Home options</div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}