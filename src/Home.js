import React from 'react';
import { Image } from 'react-native';
import { Link } from "react-router-dom";
import './App.css';
import retele from './img/retele.webp';

const Home = () => {
  return (
      <div style={{ minHeight: '100vh', flexDirection: 'column', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

        <div style={{ marginBottom: 40, display: 'flex', alignItems: 'center', flexDirection: 'row', fontSize: 'calc(10px + 1vmin)', fontFamily: 'Poppins, sans-serif' }}>
          <Link className="info" to="/tietoa">
            <p className="info">Mikä on Retele?</p>
          </Link>
        </div>

        <div style={{ flexDirection: 'row' }}>
          <img src={retele} className="logo" draggable="false" alt="Retele" style={{ }}/>
        </div>

      <div style={{ marginTop: 5 } }>
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

      {/* <div class="trustpilot-widget" data-locale="fi-FI" data-template-id="56278e9abfbbba0bdcd568bc" data-businessunit-id="6526ef2852854f3d21fb3f2c" data-style-height="52px" data-style-width="100%">
          <a href="https://fi.trustpilot.com/review/retele.fi" target="_blank" rel="noreferrer">Trustpilot</a>
        </div>
         */}
    </div>
  );
}

export default Home;