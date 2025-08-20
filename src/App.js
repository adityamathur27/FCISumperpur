
import React from 'react';

import './App.css';
import './components/Responsive.css';
import AppRouter from './AppRouter';


function App() {
  return (
    <>
      <div style={{width:'100vw',background:'#f5f5f5',padding:'0.1rem 1.5rem',textAlign:'right',position:'absolute',top:0,left:0,zIndex:'2000'

      }}>
        <div id="google_translate_element"></div>
      </div>
      <div style={{paddingTop: '0px'}}>
        <AppRouter />
      </div>
    </>
  );
}

export default App;
