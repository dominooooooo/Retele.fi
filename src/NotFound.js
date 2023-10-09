import React from 'react';
import './App.css';
import notfound from './img/404.png';

const NotFound = () => {
    return (
    <div className="NotFound" style={{ flexDirection: 'column', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        
        <div style={{ flexDirection: 'row' }} >
            <img className="notfound" src={notfound} draggable="false" alt="Not Found" />
        </div>
        
        <div style={{ flexDirection: 'row', textAlign: 'center', fontWeight: 'bold', fontSize: '1rem' }} >
            <p>Tätä sivua ei löydy</p>
        </div>
    </div>
    );
}
 
export default NotFound;