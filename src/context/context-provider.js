import { createContext } from 'react';
import { useContextValue } from '../hooks/context-value';

export const Context = createContext();

export function ContextProvider({ children }) {
    return (
        <Context.Provider value={useContextValue()}>
            {children}
        </Context.Provider>
    );
}
