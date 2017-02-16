import {render} from 'react-dom';
import intro_background from 'images/intro_background.jpg'

export default class Intro extends React.Component {
  render () {
    return (
      <div className="section intro">
        <div class="row">
          <div className="title col s12 hide-on-large-only">
              Bring the Smarts to your Home
          </div>
          <div className="title col s12 hide-on-med-and-down">
              Bring the Smarts to your Home
          </div>
        </div>
        <div className="container content">
          Smart Home consultation and installation by a knowledgeable local professional.
        </div>
        <img className="responsive-img" src={intro_background} />
        <div>Voice control</div>
        <div>Lighting</div>
        <div>Climate Control (thermostats, fans)</div>
        <div>Networking WIFI</div>
        <div>Audio</div>
        <div>TV</div>
        <div>Security</div>
      </div>
    );
  }
}