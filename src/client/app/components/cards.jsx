import {render} from 'react-dom';
import Card from './card';

export default class Cards extends React.Component {
  render () {
    return (
      <div className="container cards">
        <div className="row">
          <Card
            icon="wifi"
            title="WiFi"
            content="A solid WiFi network is what makes your Smart Home tick" />
          <Card
            icon="microphone"
            title="Voice Control"
            content="A solid WiFi network is what makes your Smart Home tick" />
          <Card
            icon="microphone"
            title="Lighting"
            content="A solid WiFi network is what makes your Smart Home tick" />
          <Card
            icon="microphone"
            title="Climate Control"
            content="fans and thermostats A solid WiFi network is what makes your Smart Home tick" />
          <Card
            icon="microphone"
            title="Audio/Video"
            content="fans and thermostats A solid WiFi network is what makes your Smart Home tick" />
          <Card
            icon="microphone"
            title="Security"
            content="fans and thermostats A solid WiFi network is what makes your Smart Home tick" />
        </div>
      </div>
    );
  }
}