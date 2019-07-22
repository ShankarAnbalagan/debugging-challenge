import React, { Component } from 'react';
import Navbar from '../components/navbar'; //navbar in path spelled with N instead of n
import Footer from '../components/Footer';
import LoginForm from '../components/LoginForm'; //LoginForm not imported
import { Glyphicon } from 'react-bootstrap';
import '../styles/App.css';


//ReactDOM.render() was not called. Added it to index.js
class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showLoginForm: true,
      showCheckmark: false
    };
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogin() {
    this.refs.navbutton.handleLogoutButton();
    this.setState({ 
      showLoginForm: true,
      showCheckmark: true
    });
  }

  handleLogout() {
    this.refs.navbutton.handleLogoutButton();
    this.setState({
      showLoginForm: true,
      showCheckmark: false
    });
  }

  render() {
    return (
      <div className='app'>
        <Navbar ref='navbutton' handleLogout={this.handleLogout} />
        <div className={this.state.showLoginForm === true ? '' : 'hide'}>
          <LoginForm handleLogin={this.handleLogin} />
        </div>
        <div className={this.state.showCheckmark === true ? 'text-center mt9x' : 'hide'}>
          <Glyphicon glyph='glyphicon glyphicon-ok-sign' />
          <h2>Great work!</h2>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;