import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import './global1.css'
 import './global.css';
 import { createRoot } from 'react-dom/client'


 let container=document.getElementById("root")
 createRoot(container).render(<App/>)