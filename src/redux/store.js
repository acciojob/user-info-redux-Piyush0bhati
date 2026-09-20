import {createStore, combineStore}  from "redux"
import userReducer from "./reducer/userReducer"

const store = createStore(userReducer)

export default store