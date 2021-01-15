import { GET_DATAS, GET_DATA_DETAILS } from "../actions/UserAction";

let initialState = {
  getDatas: false,
  getErrors: false,
  getDatasDetails: false,
  getErrorsDetails: false
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATAS:
      return {
        ...state,
        getDatas: action.payload.data,
        getErrors: action.payload.errorMessage,
      };
    case GET_DATA_DETAILS:
      return {
        ...state,
        getDatasDetails: action.payload.data,
        getErrorsDetails: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default users;
