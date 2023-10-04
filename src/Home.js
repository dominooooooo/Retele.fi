import React from 'react';
import { Image } from 'react-native';
import './App.css';

const Home = () => {
  return (
      <div style={{ minHeight: '100vh', flexDirection: 'column', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

        <div style={{ flexDirection: 'row' }}>
          <Image source={require('./retele.png')} style={{ height: 100, width: 360 }}/>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', fontSize: 'calc(10px + 1vmin)', color: 'rgb(0, 0, 0)' }}>
          <Image source={require('./instagram.png')} style={{ width: 20, height: 20 }}/>
          <p style={{ padding: 5, paddingRight: 15 }}>@retele_fi</p>
          <Image source={require('./tiktok.png')} style={{ width: 20, height: 20}}/>
          <p style={{ padding: 3 }}>@retele_fi</p>
        </div>

      </div>
  );
}

export default Home;