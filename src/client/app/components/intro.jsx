import {render} from 'react-dom';
import Card from './card';

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
        <div className="row">
          <Card
            title="WiFi"
            content="A solid WiFi network is what makes your Smart Home tick" />
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
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