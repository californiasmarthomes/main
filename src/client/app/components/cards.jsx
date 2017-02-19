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
            icon="lightbulb-o"
            title="Lighting"
            content="A solid WiFi network is what makes your Smart Home tick" />
          <Card
            icon="thermometer-half"
            title="Climate Control"
            content="fans and thermostats A solid WiFi network is what makes your Smart Home tick" />
          <Card
            icon="volume-up"
            title="Audio"
            content="fans and thermostats A solid WiFi network is what makes your Smart Home tick" />
          <Card
            icon="television"
            title="Video"
            content="amazon tv, roku" />
          <Card
            icon="shield"
            title="Security"
            content="fans and thermostats A solid WiFi network is what makes your Smart Home tick" />
          <Card
            icon="window-maximize"
            title="Window Coverings"
            content="fans and thermostats A solid WiFi network is what makes your Smart Home tick" />
        </div>
      </div>
    );
  }
}