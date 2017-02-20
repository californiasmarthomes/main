import {render} from 'react-dom';

export default class ContactForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isSending: false,
      iSDisabled: false,
      isCompleted: false,
      isError: false,
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
     isDisabled: true,
     isError: false,
     isCompleted: false,
   })

   $.ajax({
      url: "contact",
      dataType: 'json',
      type: 'POST',
      data: {
        name: this.state.name,
        email: this.state.email,
        message: this.state.message,
      },
      success: (data) => {
        this.setState({
         isSending: false,
         isDisabled: true,
         isCompleted: true,
         isError: false,
        });
      },
      error: (data) => {
        this.setState({
         isSending: false,
         isDisabled: false,
         isCompleted: false,
         isError: true,
        });
      },
    });
  }

  render () {

    let error = null;
    if (this.state.isError) {
      error = <div className="error">Something went wrong; try later.</div>;
    }

    return (
      <div className="contact container">
      <h4>Send us a Note</h4>
        <div className="row">
            <form className="col s12" onSubmit={this.handleSubmit.bind(this)}>
              <div className="row">
                <div className="input-field col s12">
                  <input required="true" aria-required="true" disabled={this.state.isDisabled ? 'disabled' : ''} id="name" type="text" className="validate" onChange={this.setValue.bind(this, 'name')} />
                  <label htmlFor="name">Name</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input required="true" aria-required="true" disabled={this.state.isDisabled ? 'disabled' : ''} id="email" type="email" className="validate" onChange={this.setValue.bind(this, 'email')} />
                  <label htmlFor="email">Email</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <textarea required="true" aria-required="true" disabled={this.state.isDisabled ? 'disabled' : ''} id="message" className="materialize-textarea" onChange={this.setValue.bind(this, 'message')}></textarea>
                  <label htmlFor="message">Message</label>
                </div>
              </div>
              <div className="button">
                {this.state.isSending
                  ? <div className="spinner">
                      <i className="fa fa-circle-o-notch fa-spin fa-2x fa-fw"></i><span>Sending...</span>
                    </div>
                  : (this.state.isCompleted
                    ? <div className="spinner">Thank you! We will get back to your shortly.</div>
                    : <button className="btn waves-effect waves-light" type="submit" name="action">Send
                          <i className="icon fa fa-1x fa-paper-plane right" aria-hidden="true" />
                      </button>)
                }
              </div>
              {error}
            </form>
          </div>
      </div>
    );
  }
}