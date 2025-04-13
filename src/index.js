import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import './Fonts/vazirfont/Farsi-Digits-Without-Latin/Vazir-Bold-FD-WOL.woff2';



ReactDOM.createRoot(document.getElementById('root') ).render(
  <React.StrictMode>
 
  <Router>
     <div dir="rtl">
     <App  />
   </div>
    </Router> 
  
    
  </React.StrictMode>
);
reportWebVitals();

