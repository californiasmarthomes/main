import {render} from 'react-dom';

export default class Footer extends React.Component {
  render () {
    return (
         <footer className="page-footer footer">
          <div className="container">
            <div className="row">
              <div className="col s12">
                  <h5>California Smart Homes</h5>
                  Saint Helena, CA<br/>
                  Serving the greater Napa area.<br/>
              </div>
            </div>
          </div>
        </footer>
          );
  }
}