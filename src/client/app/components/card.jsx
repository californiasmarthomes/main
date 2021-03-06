import {render} from 'react-dom';

export default class Card extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    const iconClasses = "icon fa fa-4x fa-" + this.props.icon;
    return (
      <div className="col s12 m12 l3">
        <div className="fixed-card">
          <i className={iconClasses} aria-hidden="true" />
          <div className="title">
            {this.props.title}
          </div>
          <div className="content">
            {this.props.content}
          </div>
        </div>
      </div>
    );
  }
}