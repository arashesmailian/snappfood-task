import { combineReducers } from "redux";
import vendorReducer from "./vendors/vendorsReducer";

const rootReducer = combineReducers({
  vendorsState: vendorReducer,
});

export default rootReducer;
