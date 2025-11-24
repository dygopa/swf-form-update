import { createContext, useReducer } from "react";
import { actions } from "./GeneralDataActions";
import { GeneralDataReducer } from "./reducer";

let intialState = {
  provinces: {
    data: [],
    loading: false,
    successful: false,
    error: null,
  },
  districts: {
    data: [],
    loading: false,
    successful: false,
    error: null,
  },
  corregimiento: {
    data: [],
    loading: false,
    successful: false,
    error: null,
  },
  genders: {
    data: [],
    loading: false,
    successful: false,
    error: null,
  },
  nationalities: {
    data: [],
    loading: false,
    successful: false,
    error: null,
  },
  civilStatus: {
    data: [],
    loading: false,
    successful: false,
    error: null,
  },
  professions: {
    data: [],
    loading: false,
    successful: false,
    error: null,
  },
  directions: {
    data: [],
    loading: false,
    successful: false,
    error: null,
  },
  economicActivities: {
    data: [],
    loading: false,
    successful: false,
    error: null,
  },
  typeDocuments: {
    data: [],
    loading: false,
    successful: false,
    error: null,
  },
  typePersons: {
    data: [],
    loading: false,
    successful: false,
    error: null,
  },
};

export const GeneralDataContext = createContext({});
const GeneralDataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GeneralDataReducer, intialState);

  return (
    <GeneralDataContext.Provider
      value={{
        state,
        dispatch,
        actions,
      }}
    >
      {children}
    </GeneralDataContext.Provider>
  );
};

export default GeneralDataProvider;
