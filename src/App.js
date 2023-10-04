import React from 'react';
import { Image } from 'react-native';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Image source={require('./retele.png')} style={{width: 500, height: 500}}/>
      </header>
    </div>
  );
}

export default App;
