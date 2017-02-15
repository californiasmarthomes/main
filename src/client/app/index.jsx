import {render} from 'react-dom';
import Navbar from 'components/navbar';
import Intro from 'components/intro';

require('./stylesheets/main.scss');

class App extends React.Component {
  render () {
    return (
      <div class="container">
        <Navbar />
        <Intro />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
