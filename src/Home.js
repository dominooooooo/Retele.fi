import React from 'react';
import { Image } from 'react-native';
import { Link } from "react-router-dom";
import './App.css';

const Home = () => {
  return (
      <div style={{ minHeight: '100vh', flexDirection: 'column', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

        <div style={{ marginBottom: -10, display: 'flex', alignItems: 'center', flexDirection: 'row', fontSize: 'calc(10px + 1vmin)', fontFamily: 'Poppins, sans-serif' }}>
          <Link className="info" to="/tietoa">
            <p className="info">Mikä on Retele?</p>
          </Link>
        </div>

        <div style={{ flexDirection: 'row' }}>
          <Image className="retelemain" source={require('./img/retele.webp')} style={{ height: 250, width: 500 }}/>
        </div>

      <div style={{ marginTop: -60 } }>
      <div style={{ marginBottom: 12, display: 'flex', alignItems: 'center', flexDirection: 'row', fontSize: 'calc(10px + 1vmin)' } }>
          <Image source={require('./img/instagram.png')} style={{ width: 20, height: 20 }}/>
          <p style={{ padding: 5, paddingRight: 10 }}>@retele_fi</p>

          <p style={{ paddingRight: 8 }}>•</p>

          <Image source={require('./img/facebook.png')} style={{ width: 25, height: 25}}/>
          <p style={{ padding: 3 }}>@Retele</p>

          <p style={{ paddingLeft: 7 }}>•</p>

        </div>

        <div style={{ marginTop: -40, display: 'flex', alignItems: 'center', flexDirection: 'row', fontSize: 'calc(10px + 1vmin)' }} >
          <Image source={require('./img/tiktok.png')} style={{ width: 20, height: 20}}/>
          <p style={{ padding: 3, paddingRight: 10 }}>@retele_fi</p>

          <p style={{ paddingRight: 3 }}>•</p>

          <Image source={require('./img/x.png')} style={{ width: 30, height: 30}}/>
          <p>@retele_fi</p>
        </div>
      </div>
    </div>
  );
}

export default Home;