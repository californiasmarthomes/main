import {render} from 'react-dom';
import office from 'images/office.jpg'

export default class Card extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        here: <i className="fa fa-wifi fa-5x" aria-hidden="true"></i>
        <div className="col s12 m6 l3">
          <div className="card noshadow">
            <div className="card-image">
              <img src={office} />
              <span className="card-title">{this.props.title}</span>
            </div>
            <div className="card-content">
              <p className="flow-text">{this.props.content}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}