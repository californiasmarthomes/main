import {render} from 'react-dom';
import office from 'images/office.jpg'

export default class WiFi extends React.Component {
  render () {
    return (
      <div>
        <div className="col s12 m6 l4">
          <div className="card">
            <div className="card-image">
              <img src={office} />
              <span className="card-title">WiFi</span>
            </div>
            <div className="card-content">
              <p className="flow-text">A solid WiFi network is at what makes your Smart Home tick</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}