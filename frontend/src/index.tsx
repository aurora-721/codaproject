import { Web3ReactProvider } from '@web3-react/core';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import './index.css';
import { getProvider } from './utils/provider';
import { BrowserRouter as Router} from 'react-router-dom';

const root = ReactDOM.render(
  <React.StrictMode>
    <Web3ReactProvider getLibrary={getProvider}>
      <App />
    </Web3ReactProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);   
