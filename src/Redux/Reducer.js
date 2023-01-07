import { combineReducers } from "redux";
import product from "./Slice/Product";
import category from "./Slice/Category";

const rootReducer = combineReducers({
  product,
  category
});

export default rootReducer;
