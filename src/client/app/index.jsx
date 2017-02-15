import {render} from 'react-dom';
import Navbar from 'components/navbar';

require('./stylesheets/main.scss');

class App extends React.Component {
  render () {
    return (
      <div>
        <Navbar />
        <div className="hello">test</div>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
