import React, {createContext,useReducer} from "react";
import AppReducer from "./AppReducer";


//Initial State
const initialState = {
    patient: {
        firstName: "",
        lastName: "",
        isFemale: false
    }
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({children}) => {
    const [state,dispatch] = useReducer(AppReducer, initialState);

    // Actions
    function inputFirstName(name){
        dispatch({type: 'INPUT_FIRSTNAME', payload: name})
    }

    function inputLastName(name){
        dispatch({type: 'INPUT_LASTNAME', payload: name})
    }

    function chooseFemale(isFemale){
        dispatch({type: 'CHOOSE_SEX', payload: isFemale})
    }

    return (<GlobalContext.Provider value={
        {
            transactions: state.transactions,
            inputFirstName,
            inputLastName,
            chooseFemale,
        }}
    >
        {children}
    </GlobalContext.Provider>);
}