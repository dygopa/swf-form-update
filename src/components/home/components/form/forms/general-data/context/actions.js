import PolicyUseCase from "../../../../../domain/useCases/policy/policyUseCase";

const getDocument = (obj) => async (dispatch) => {
  try {
    dispatch({ type: "GET_DOCUMENT_LOADING" });

    const res = await new PolicyUseCase().getDownloadPolicy(obj);

    dispatch({ type: "GET_DOCUMENT_SUCCESSFUL", payload: { data: res } });
  } catch (error) {
    console.log("Error calling action", error);
    dispatch({ type: "GET_DOCUMENT_ERROR", payload: { error: error } });
  }
};

const getTypesPolicy = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_TYPE_POLICIES_LOADING" });

    const res = await new PolicyUseCase().getTypesPolicy();

    dispatch({ type: "GET_TYPE_POLICIES_SUCCESSFUL", payload: { data: res } });
  } catch (error) {
    console.log("Error calling action", error);
    dispatch({ type: "GET_TYPE_POLICIES_ERROR", payload: { error: error } });
  }
};

const getCompanies = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_COMPANIES_LOADING" });

    const res = await new PolicyUseCase().getCompanies({});

    dispatch({ type: "GET_COMPANIES_SUCCESSFUL", payload: { data: res } });
  } catch (error) {
    console.log("Error calling action", error);
    dispatch({ type: "GET_COMPANIES_ERROR", payload: { error: error } });
  }
};


const getBanks = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_BANKS_LOADING" });

    const res = await new BanksUseCase().getBanks();

    dispatch({ type: "GET_BANKS_SUCCESSFUL", payload: { data: res } });
  } catch (error) {
    console.log("Error calling action", error);
    dispatch({ type: "GET_BANKS_ERROR", payload: { error: error } });
  }
};


export const actions = {
  getDocument,
  getTypesPolicy,
  getCompanies,
  getBanks
};
