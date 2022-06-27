import { combineReducers } from "redux";

import cityReducer from "./cityReducer";
import itineraryReducer from "./itineraryReducer";
import countryReducer from "./countryReducer";

const mainReducer = combineReducers({cityReducer,itineraryReducer,countryReducer})
export default mainReducer