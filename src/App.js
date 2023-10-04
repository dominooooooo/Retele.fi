import React from 'react';
import { Image } from 'react-native';
import './App.css';

function App() {
  return (
    <div className="App">

      <div className="App-header">
        <div className="App-2">
          <Image source={require('./retele.png')} style={{width: 400, height: 120, padding: 60}}/>
        </div>
        <div className="App-3">
          <Image source={require('./instagram.png')} style={{width: 20, height: 20}}/>
          <p style={{padding: 5}}>@retele_fi</p>
        </div>
      </div>

    </div>
  );
}

export default App;
