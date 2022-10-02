const initialState = {
  loading: false,
  vendors: [],
  error: "",
};

const vendorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_VENDORS_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_VENDORS_SUCCESS":
      return {
        loading: false,
        vendors: action.payload,
        error: "",
      };
    case "FETCH_VENDORS_FAILURE":
      return {
        loading: false,
        vendors: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default vendorsReducer;
