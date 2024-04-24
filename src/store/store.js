import { createStore, combineReducers } from "redux"
import {counterReducer} from "./counterReducer"
import {customersReducer} from "./customersReducer" 
import { composeWithDevTools } from "@redux-devtools/extension"
const rootReducer = combineReducers({
  count: counterReducer,
  customers: customersReducer

})

const store = createStore(rootReducer, composeWithDevTools())
export default store