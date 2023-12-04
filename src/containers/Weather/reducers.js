// src/reducers.js

export const initialState = {
  data: {},
  loading: false,
  error: null,
  dataList: [],
  loadingList: false,
  errorList: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA_REQUEST":
      return { ...state, loading: true, error: null };
    case "FETCH_DATA_SUCCESS":
      return { ...state, loading: false, data: action.payload };
    case "FETCH_DATA_ERROR":
      return { ...state, loading: false, error: action.payload };
    case "FORECAST_DATA_REQUEST":
      return { ...state, loadingList: true, errorList: null };
    case "FORECAST_DATA_SUCCESS":
      return { ...state, loadingList: false, dataList: action.payload };
    case "FORECAST_DATA_ERROR":
      return { ...state, loadingList: false, errorList: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
