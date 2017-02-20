import {render} from 'react-dom';

export default class ContactForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isSending: false
    };
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

   this.setState({
     isSending: true,
   })

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
      <div className="contact container">
      <h4>Send us a Note</h4>
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
              {this.state.isSending
                ? <div className="spinner">
                    <i className="fa fa-circle-o-notch fa-spin fa-2x fa-fw"></i><span>Sending...</span>
                  </div>
                : <button className="btn waves-effect waves-light" type="submit" name="action">Send
                      <i className="icon fa fa-1x fa-paper-plane right" aria-hidden="true" />
                  </button>
              }
            </form>
          </div>
      </div>
    );
  }
}