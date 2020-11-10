import React from 'react'
import { createStore, applyMiddleware } from "redux";
//import { Provider } from "react-redux"
import thunk from 'redux-thunk'
//import reducer from "./reducer"
import initialState from "./initialState"
import rootReducer from "./reducer";

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
 
//export default props => <Provider store={store} {... props} />;
export default store;








// import { createStore } from "redux";
// import rootReducer from "./reducer";
 
// export default createStore(rootReducer);


