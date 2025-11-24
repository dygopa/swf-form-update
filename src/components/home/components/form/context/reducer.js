export const FormReducer = (state, action) => {
    switch (action.type) {
        
        case 'SET_ACTIVE_STEP':
            return {
                ...state,
                activeStep: action.payload.data,
            };
        case 'SET_GENERAL_DATA':
            return {
                ...state,
                generalData: {
                    ...state.generalData, 
                    ...action.payload.data,
                },
            };
        case 'SET_ADDRESS_DATA':
            return {
                ...state,
                addressData: {
                    ...state.addressData, 
                    ...action.payload.data,
                },
            };
        case 'SET_OCCUPATIONAL_DATA':
            return {
                ...state,
                occupationalData: {
                    ...state.occupationalData, 
                    ...action.payload.data,
                },
            };
        case 'SET_FINANCIAL_DATA':
            return {
                ...state,
                financialData: {
                    ...state.financialData, 
                    ...action.payload.data,
                },
            };
        case 'SET_REFERENCES_DATA':
            return {
                ...state,
                referencesData: {
                    ...state.referencesData, 
                    ...action.payload.data,
                },
            };
        default:
            return state;
    }
}