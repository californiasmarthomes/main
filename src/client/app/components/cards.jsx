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
            content="A solid WiFi network is what makes your Smart Home tick. We install WiFi networks that are secure, with high device capacity and full building coverage." />
          <Card
            icon="microphone"
            title="Voice Control"
            content="Add voice control to turn on your lights, listen to music, set alarms. The ultimate hand free experience." />
          <Card
            icon="lightbulb-o"
            title="Lighting"
            content="We install dimmer and switches that can be controlled individually or as group, create presets and schedules that match your daily routine." />
          <Card
            icon="thermometer-half"
            title="Climate Control"
            content="Installing a Smart Thermostat with temperature sensors in every room is the best way to save on your energy bill. Add smart ceiling fans for total comfort." />
          <Card
            icon="volume-up"
            title="Audio"
            content="Whether you are looking to add audiophiles speakers to stream your favorite playlist in every room, or install a wall shattering home theater without any wiring, we can help." />
          <Card
            icon="television"
            title="Video"
            content="No more cable TV bill! We can install and setup TV streaming services. Access to HBO, netflix, amazon prime and most TV networks." />
          <Card
            icon="shield"
            title="Security"
            content="Add security features to your home, video monitoring, motion sensors or even presence simulators at a fraction of the cost of antiquated security companies." />
          <Card
            icon="window-maximize"
            title="Window Coverings"
            content="Seamlessly integrate window coverings into your Smart Home. Use voice control, a classic wall switch or remote controls. Open an dclose your shades on a schedule or based on the amount of sunlight." />
        </div>
      </div>
    );
  }
}