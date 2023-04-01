import { combineReducers, createStore } from "redux";
import constructorReducer from "./reducers/constructor";


const rootReducer = combineReducers({

    constuctor: constructorReducer,

})


const store = createStore(rootReducer)

 export default store;