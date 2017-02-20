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
            content="A solid WiFi network is what makes your Smart Home tick. We install secure WiFi networks providing full coverage for your home." />
          <Card
            icon="microphone"
            title="Voice Control"
            content="Add voice control to turn on your lights, listen to music and set alarms. It's the ultimate hands free experience." />
          <Card
            icon="lightbulb-o"
            title="Lighting"
            content="We install dimmers and switches that can be controlled individually or as group, and create presets and schedules that match your daily routines." />
          <Card
            icon="window-maximize"
            title="Window Coverings"
            content="Seamlessly integrate window coverings into your Smart Home. Use voice control, a classic wall switch or remote control. Open and close your shades on a schedule or based on the amount of sunlight." />
          <Card
            icon="thermometer-half"
            title="Climate Control"
            content="Installing a Smart Thermostat with temperature sensors in every room is the best way to save on your energy bill. Add smart ceiling fans for total comfort." />
          <Card
            icon="volume-up"
            title="Audio"
            content="Whether you want to add high end speakers to stream your favorite playlist in every room, or install a window shattering wireless home theater system, we can help." />
          <Card
            icon="television"
            title="Video"
            content="No more cable TV bill! We install and setup TV streaming services. Access to HBO, Netflix, Amazon Prime and most TV networks." />
          <Card
            icon="shield"
            title="Security"
            content="Add security features to your home with video monitoring, motion sensors or cutting edge presence simulators at a fraction of the cost of antiquated security solutions." />
        </div>
      </div>
    );
  }
}