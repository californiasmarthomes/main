import {render} from 'react-dom';

export default class Intro extends React.Component {
  render () {
    return (
      <div className="section intro">
        <div class="row">
          <div className="title valign center-align col s12 hide-on-large-only">
              Bring the Smarts to your Home
          </div>
          <div className="title valign center-align col s12 hide-on-med-and-down">
              Bring the Smarts to your Home
          </div>
        </div>
        <div>Intro; install, consultations, home and small businesses, personable
          serving area, </div>
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