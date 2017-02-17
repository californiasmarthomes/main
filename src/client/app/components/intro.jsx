import {render} from 'react-dom';
import WiFi from './wifi';

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
              Smart Home installation by a knowledgeable local professional.
            </div>
          </div>
        </div>
        <div className="row">
          <WiFi/>
          <WiFi/>
          <WiFi/>
          <WiFi/>
          <WiFi/>
          <WiFi/>
        </div>
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