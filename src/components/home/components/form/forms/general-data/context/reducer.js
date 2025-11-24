export const TileReducer = (state, action) => {
  switch (action.type) {
    case "GET_DOCUMENT_LOADING":
      return {
        ...state,
        document: {
          ...state.document,
          data: null,
          loading: true,
          successful: false,
          error: null,
        },
      };
    case "GET_DOCUMENT_SUCCESSFUL":
      return {
        ...state,
        document: {
          ...state.document,
          data: action.payload.data,
          loading: false,
          successful: true,
          error: null,
        },
      };
    case "GET_DOCUMENT_ERROR":
      return {
        ...state,
        document: {
          ...state.document,
          data: null,
          loading: false,
          successful: false,
          error: action.payload.error,
        },
      };
    case "GET_TYPE_POLICIES_LOADING":
      return {
        ...state,
        typePolicies: {
          ...state.typePolicies,
          data: [],
          loading: true,
          successful: false,
          error: null,
        },
      };
    case "GET_TYPE_POLICIES_SUCCESSFUL":
      return {
        ...state,
        typePolicies: {
          ...state.typePolicies,
          data: action.payload.data,
          loading: false,
          successful: true,
          error: null,
        },
      };
    case "GET_TYPE_POLICIES_ERROR":
      return {
        ...state,
        typePolicies: {
          ...state.typePolicies,
          data: [],
          loading: false,
          successful: false,
          error: action.payload.error,
        },
      };
    case "GET_COMPANIES_LOADING":
      return {
        ...state,
        companies: {
          ...state.companies,
          data: [],
          loading: true,
          successful: false,
          error: null,
        },
      };
    case "GET_COMPANIES_SUCCESSFUL":
      return {
        ...state,
        companies: {
          ...state.companies,
          data: action.payload.data,
          loading: false,
          successful: true,
          error: null,
        },
      };
    case "GET_COMPANIES_ERROR":
      return {
        ...state,
        companies: {
          ...state.companies,
          data: [],
          loading: false,
          successful: false,
          error: action.payload.error,
        },
      };
    default:
      return state;
  }
};
