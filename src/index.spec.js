// src/index.spec.js
/* eslint-env jest */
import ReactDOM from 'react-dom';
import React from 'react';
// import { ReactStrictMode, rootElement } from './index';

jest.mock('react-dom', () => ({ render: jest.fn() }));

describe('index.js', () => {
    it('renders without crashing', () => {
        ReactDOM.render(<React.StrictMode />, document.getElementById('root'));
        expect(ReactDOM.render).toHaveBeenCalledWith(
            <React.StrictMode />,
            document.getElementById('root')
        );
    });
});
