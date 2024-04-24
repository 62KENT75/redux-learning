import { createStore, combineReducers, applyMiddleware } from "redux"
import {counterReducer} from "./counterReducer"
import {customersReducer} from "./customersReducer" 
import { composeWithDevTools } from "@redux-devtools/extension"
import { thunk } from "redux-thunk"
const rootReducer = combineReducers({
  count: counterReducer,
  customers: customersReducer

})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
export default store