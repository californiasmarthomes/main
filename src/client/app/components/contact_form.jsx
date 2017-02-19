import {render} from 'react-dom';

export default class ContactForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  setValue(field, event) {
    //If the input fields were directly within this
    //this component, we could use this.refs.[FIELD].value
    //Instead, we want to save the data for when the form is submitted
    var object = {};
    object[field] = event.target.value;
    this.setState(object);
  }

  handleSubmit(e) {

   //we don't want the form to submit, so we prevent the default behavior
   e.preventDefault();

   $.ajax({
      url: "contact",
      dataType: 'json',
      type: 'POST',
      data: {
        first_name: this.state.first_name,
      },

/* success: (data) => {
        this.setState({data: data});
      }, */
/*      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)*/
    });
  }

  render () {
    return (
      <div className="container">
        <div className="row">
            <form className="col s12" onSubmit={this.handleSubmit.bind(this)}>
              <div className="row">
                <div className="input-field col s6">
                  <input id="first_name" type="text" className="validate" onChange={this.setValue.bind(this, 'first_name')} />
                  <label htmlFor="first_name">First Name</label>
                </div>
                <div className="input-field col s6">
                  <input id="last_name" type="text" className="validate"/>
                  <label htmlFor="last_name">Last Name</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input id="email" type="email" className="validate"/>
                  <label htmlFor="email">Email</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <textarea id="message" className="materialize-textarea"></textarea>
                  <label htmlFor="message">Message</label>
                </div>
              </div>
              <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                  <i className="material-icons right">send</i>
              </button>
            </form>
          </div>
      </div>
    );
  }
}