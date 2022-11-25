import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC_krAxHRsWsHRXpCG3S8A1X4i6VW-YHd8",
  authDomain: "bike-pro-687b2.firebaseapp.com",
  projectId: "bike-pro-687b2",
  storageBucket: "bike-pro-687b2.appspot.com",
  messagingSenderId: "743222464506",
  appId: "1:743222464506:web:522ddeef6e3471ee735e43"
};


const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <App/>     
      </BrowserRouter>
  </React.StrictMode>
);


