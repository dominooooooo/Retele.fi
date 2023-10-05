import React from 'react';
import { Image } from 'react-native';
import './App.css';

const Home = () => {
  return (
      <div style={{ minHeight: '100vh', flexDirection: 'column', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

        <div style={{ flexDirection: 'row' }}>
          <Image source={require('./retele.png')} style={{ resizeMode: 'contain', height: 98, width: 360 }}/>
        </div>

        {/* <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', fontSize: 'calc(10px + 1vmin)', color: 'rgb(0, 0, 0)' }}>
          <p style={{ }}>Ota sillä välin somet haltuun:</p>
        </div> */}

        <div style={{ marginBottom: 12, display: 'flex', alignItems: 'center', flexDirection: 'row', fontSize: 'calc(10px + 1vmin)' }}>
          <Image source={require('./instagram.png')} style={{ width: 20, height: 20 }}/>
          <p style={{ padding: 5, paddingRight: 15 }}>@retele_fi</p>

          <Image source={require('./facebook.png')} style={{ width: 25, height: 25}}/>
          <p style={{ padding: 3 }}>@Retele</p>
        </div>

        <div style={{ marginTop: -40, display: 'flex', alignItems: 'center', flexDirection: 'row', fontSize: 'calc(10px + 1vmin)' }}>
          <Image source={require('./tiktok.png')} style={{ width: 20, height: 20}}/>
          <p style={{ padding: 3, paddingRight: 17 }}>@retele_fi</p>

          <Image source={require('./x.png')} style={{ width: 30, height: 30}}/>
          <p>@retele_fi</p>
        </div>

      </div>
  );
}

export default Home;