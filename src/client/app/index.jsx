import {render} from 'react-dom';
import Navbar from 'components/navbar';
import Intro from 'components/intro';
import Cards from 'components/cards';

require('./stylesheets/main.scss');

class App extends React.Component {
  render () {
    return (
      <div>
        <Intro />
        <Cards />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
