import { configureStore } from "@reduxjs/toolkit";
import { loginReducer, productDataReducer, registerReducer, userDataReducer } from "./reducers";

const store = configureStore({
  reducer: {
    userData: userDataReducer,
    productData : productDataReducer,
    login : loginReducer,
    register : registerReducer,


  },
});




export default store