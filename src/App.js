import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/Galaxy.css';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App d-flex w-100 h-100 mx-auto p-4 flex-column">
        <Header />
        <div className="mb-auto"
          style={{
            paddingTop: '80px'
          }}></div>
        <main role="main" className="mx-auto text-center content-hero"
          style={{
            maxWidth: '685px'
          }}>
          <h1 className="display-1 text-white font-weight-bold">Galaxy</h1>
          <div className="lead text-white-50">Galaxy is a blockchain agnostic, always on, node network and protocol offering services to decentralized platforms
          </div>
          <a href="https://github.com/galaxypi/galaxy/" 
            className="btn btn-lg btn-light btn-block mb-5 mx-auto btn-hero"
            role="button">
            Install Galaxy
          </a>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
