import React from 'react';
import InputSearchArea from '../InputSearchArea'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>
          Auto-Complete Search App
        </h2>
        {/* <InputSearchArea /> */}
        <InputSearchArea
        inputRef={el => this.inputElement = el}
      />
      </header>
    </div>
  );
}

export default App;
