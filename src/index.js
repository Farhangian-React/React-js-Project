import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import './Fonts/a83daff6a3fcaf7cf89f771c940e401f.ttf';



//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(
  //<React.StrictMode>
    //<App />
  //</React.StrictMode>
//);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

ReactDOM.createRoot(document.getElementById('root') ).render(
  <React.StrictMode>
 
  <Router>
     <div dir="rtl">
     <App />
   </div>
    </Router> 
  
    
  </React.StrictMode>
);
reportWebVitals();