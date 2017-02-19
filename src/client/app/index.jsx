import {render} from 'react-dom';
import Navbar from 'components/navbar';
import Intro from 'components/intro';
import Cards from 'components/cards';
import Footer from 'components/footer';
import ContactForm from 'components/contact_form';

require('./stylesheets/main.scss');

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <div className="page">
        <Intro />
        <Cards />
        <Footer />
        <ContactForm />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
