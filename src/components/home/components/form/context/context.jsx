import { createContext, useReducer } from "react";
import { FormReducer } from "./reducer";
import { 
    addressDataInitialState, 
    generalDataInitialState, 
    occupationalDataInitialState, 
    financialProfileDataInitialState,
    referencesDataInitialState 
} from "./initialState";

const intialState = {
    activeStep: 1,
    generalData: generalDataInitialState,
    addressData: addressDataInitialState,
    occupationalData: occupationalDataInitialState,
    financialData: financialProfileDataInitialState,
    referencesData: referencesDataInitialState
}

export const FormContext = createContext({})
const FormProvider = ({ children }) => {

    const [state, dispatch] = useReducer(FormReducer, intialState)
    
    return (
        <FormContext.Provider value={{
            state, dispatch
        }}>
            {children}
        </FormContext.Provider>
    );
};

export default FormProvider;