import {createStore,applyMiddleware} from "redux";
import rootReducer from "./reducers";
import {thunk} from "redux-thunk";
// const loggerMiddleware = (store) => (next) => (action) => {
//     console.log("dispatching action ->" ,action);
//     console.log("store object ->", store.getState())
//     return next(action);
// }

const customMiddleware = (store) => (next) => (action) => {
    console.log("Incoming Action",action);
    console.log("Global Store State",store.getState())
    return next(action);
}

const middleware = [customMiddleware,thunk]


const store = createStore(rootReducer,applyMiddleware(...middleware));

// var x = store.getState()
// 

export default store;