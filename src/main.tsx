import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/styles.css'
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
