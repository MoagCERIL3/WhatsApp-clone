import React, {useContext, useReducer, createContext} from 'react';

// Context
export const StateContext = createContext();

// Provider
export const Provider = ({ reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);

export const useContextValue = () => useContext(StateContext);


