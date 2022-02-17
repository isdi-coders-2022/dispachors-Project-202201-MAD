import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import './index.scss';
import { ContextProvider } from './context/context-provider';

ReactDOM.render(
    <React.StrictMode>
        <ContextProvider>
            <BrowserRouter>
                <Auth0Provider
                    domain="dev-tbdb7-ah.us.auth0.com"
                    clientId="msHFZi5o44WFfAiY5HCBk9w5ebn6rDeI"
                    redirectUri={window.location.origin}
                >
                    <App />
                </Auth0Provider>
            </BrowserRouter>
        </ContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
