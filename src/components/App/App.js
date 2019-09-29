import React from 'react';
import InputSearchArea from '../InputSearchArea'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Auto-Complete Search App
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <InputSearchArea />
      </header>
    </div>
  );
}

export default App;
