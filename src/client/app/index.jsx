import {render} from 'react-dom';
import Navbar from 'components/navbar';
import Intro from 'components/intro';
import Cards from 'components/cards';
import Footer from 'components/footer';

require('./stylesheets/main.scss');

class App extends React.Component {
  render () {
    return (
      <div>
        <Intro />
        <Cards />
        <Footer />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
