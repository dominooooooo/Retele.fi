import React from 'react';
import { Link } from "react-router-dom";
import './App.css';
import goback from './img/goback.png';
import retele from './img/retele.webp';
import instagram from './img/instagram.png';
import facebook from './img/facebook.png';
import tiktok from './img/tiktok.png';
import x from './img/x.png';

const Info = () => {
  return (
    <div className="div" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="box">
          <div className="bg">
            <Link to="/">
              <img className="goback" src={goback} draggable="false" alt="Tietoa" style={{ marginTop: '1%', marginInline: '1%' }} />
            </Link>
          </div>
            <div className="retele2" style={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img className="retele" src={retele} draggable="false" alt="Retele" />
            </div>
          <div className="text" style={{ textAlign: 'start'}}>
            <div className="text2" style={{ margin: 10 }} >
            <div className="text3" style={{ textAlign: 'center', flexDirection: 'row', justifyContent: 'center' }}>
              <span>Suomalainen yritys, joka ostaa käytettyjä iPhoneja, kunnostaa ne ja jälleenmyy järkevään hintaan. 
                Ostamalla uuden puhelimesi meiltä, säästät hurjasti luontoa sekä kukkaroa!</span>
            </div>
            <div className="div1" style={{ fontWeight: 'bold', flexDirection: 'row', display: 'flex' }}>
              <span>Miten voin myydä puhelimeni Reteleelle?</span>
            </div>
            <div className="div3" style={{ flexDirection: 'row', display: 'flex' }}>
              <span>Voit tarjota omaa iPhoneasi yksityisviestillä Instagramissa tai lähettämällä 
                sähköpostin osoitteeseen retele.fi@gmail.com. Kerromme 1-3 päivän sisällä hinta-arvion puhelimestasi.</span>
            </div>
            <div className="div2" style={{ fontWeight: 'bold', flexDirection: 'row', display: 'flex' }}>
              <span>Missä Retele myy kunnostettuja puhelimia?</span>
            </div>
            <div className="div3" style={{ flexDirection: 'row', display: 'flex' }}>
              <span>Myymme iPhonemme Instagramissa, Tori.fi sekä Facebookissa. Jos sinulla on toive iPhonesta, voit laittaa meille Instagram viestin tai sähköpostin ja kertoa toiveesi. 
                Koitamme saada sinulle oman haluamasi iPhonen kilpailukykyiseen hintaan!</span>
            </div>
            <div className="div2" style={{ fontWeight: 'bold', flexDirection: 'row', display: 'flex' }}>
              <span>Miten Retele toimittaa puhelimet?</span>
            </div>
            <div className="div3" style={{ flexDirection: 'row', display: 'flex' }}>
              <span>Porin alueella asuville onnistuu kotiinkuljetus ja kaupat kasvotusten, muuten toimitamme ne postilla.</span>
            </div>
          </div>
          </div>
          <div className="somet" style={{ display: 'flex', opacity: 0.7 }}>
              <img className="ig" src={instagram} alt="Instagram" />
              <p style={{ padding: 5, paddingRight: 10 }}>@retele_fi</p>

              <p style={{ paddingRight: 8 }}>•</p>

              <img className="fb" src={facebook} alt="Facebook" />
              <p style={{ padding: 3, paddingRight: 8 }}>@Retele</p>

              <p style={{ paddingRight: 8 }}>•</p>

              <img className="tt" src={tiktok} alt="TikTok" />
              <p style={{ padding: 3, paddingRight: 10 }}>@retele_fi</p>

              <p style={{ paddingRight: 3 }}>•</p>

              <img className="x" src={x} alt="X/Twitter" />
              <p>@retele_fi</p>
            </div>
        </div>
    </div>   
  );
}

export default Info;