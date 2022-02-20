// src/index.spec.js
/* eslint-env jest */

import ReactDOM from 'react-dom';
// eslint-disable-next-line import/named
import { ReactStrictMode, rootElement } from './index';

jest.mock('react-dom', () => ({ render: jest.fn() }));

describe('index.js', () => {
    it('renders without crashing', () => {
        ReactDOM.render(ReactStrictMode, rootElement);
        expect(ReactDOM.render).toHaveBeenCalledWith(
            ReactStrictMode,
            rootElement
        );
    });
});
