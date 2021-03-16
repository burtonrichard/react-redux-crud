import {
  GET_DATA_DETAIL,
  GET_DATA_LIST,
  POST_DATA_CREATE,
  PUT_DATA_UPDATE,
} from "../actions/dataAction";

let initialState = {
  getDataList: false,
  errorDataList: false,
  getDataDetail: false,
  errorDataDetail: false,
  getDataResponse: false,
  errorDataResponse: false,
  title: "Simple Crud!!!",
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_LIST:
      return {
        ...state,
        getDataList: action.payload.data,
        errorDataList: action.payload.errorMessage,
      };

    case GET_DATA_DETAIL:
      return {
        ...state,
        getDataDetail: action.payload.data,
        errorDataDetail: action.payload.errorMessage,
      };

    case POST_DATA_CREATE:
      return {
        ...state,
        getDataResponse: action.payload.data,
        errorDataResponse: action.payload.errorMessage,
      };

    case PUT_DATA_UPDATE:
      return {
        ...state,
        getDataResponse: action.payload.data,
        errorDataResponse: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default data;
