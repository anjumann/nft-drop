import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { RecoilRoot } from 'recoil';

const activeChainId = ChainId.Goerli;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThirdwebProvider desiredChainId={activeChainId}>
      <BrowserRouter>
        <RecoilRoot>
          <App />
        </RecoilRoot>
      </BrowserRouter>
    </ThirdwebProvider>
  </React.StrictMode>
);
