import axios from "axios";

const fetchVendorsRequest = () => {
  return {
    type: "FETCH_VENDORS_REQUEST",
  };
};
const fetchVendorsSuccess = (vendors) => {
  return {
    type: "FETCH_VENDORS_SUCCESS",
    payload: vendors,
  };
};
const fetchVendorsFailure = (error) => {
  return {
    type: "FETCH_VENDORS_FAILURE",
    payload: error,
  };
};

export const fetchVendors = (page = 1) => {
  return (dispatch) => {
    dispatch(fetchVendorsRequest());
    axios
      .get(
        `https://snappfood.ir/mobile/v3/restaurant/vendors-list?page=${page}&page_size=10&lat=35.754&long=51.328`
      )
      .then((response) => {
        const vendors = response.data.data.finalResult;
        dispatch(fetchVendorsSuccess(vendors));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchVendorsFailure(errorMsg));
      });
  };
};
