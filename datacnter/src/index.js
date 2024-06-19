import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Ng from './pages/Ng';
import reportWebVitals from './reportWebVitals';
import Sld_s1 from './components/Sld_s1';
import BusStur from './pages/BusStur';
import Kachari_Basti from './components/medical_MFT/Kachari_Basti';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <BusStur /> */}
    {/* <Sld_s1 /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
