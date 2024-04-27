import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 <Auth0Provider
    domain="dev-mw55ey2uqk3bkl0r.us.auth0.com"
    clientId="m8oX8UyTl8qeTJ89sTvOcNOQIglvcjvR"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
    </Auth0Provider>
  </React.StrictMode>
);
