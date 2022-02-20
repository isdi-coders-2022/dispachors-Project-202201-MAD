import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import './index.scss';
import { ContextProvider } from './context/context-provider';

export const ReactStrictMode = (
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

ReactDOM.render(
    <React.StrictMode>
        <Auth0Provider
            domain="dev-tbdb7-ah.us.auth0.com"
            clientId="msHFZi5o44WFfAiY5HCBk9w5ebn6rDeI"
            redirectUri={window.location.origin}
        >
            <ContextProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ContextProvider>
        </Auth0Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
reportWebVitals();
