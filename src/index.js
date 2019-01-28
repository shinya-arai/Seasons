import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import ErrorMessage from './ErrorMessage';

class App extends Component {
  state = { lat: null, error: '' };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      pos => this.setState({ lat: pos.coords.latitude }),
      err => this.setState({ error: err.message })
    );
  }

  renderContent() {
    if (this.state.lat && !this.state.error) {
      return <SeasonDisplay lat={this.state.lat} />
    } 
    
    else if (!this.state.lat && this.state.error) {
      return <ErrorMessage errorMessage={this.state.error} />;
    } 
    
    else {
      return <Spinner />;
    }
  }

  render() {
    return (
      <div className="border red">
        {this.renderContent()}
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);