import { createReducer } from "@reduxjs/toolkit";


export const userDataReducer = createReducer({}, (builder) => {
  builder
    .addCase("userDataRequest", (state, action) => {
      state.loading = true;
    })
    .addCase("userDataSuccess", (state, action) => {
      state.loading = false;
      state.user = action.payload
      state.message = "data Fetched Successfully";
    })
    .addCase("userDataError", (state, action) => {
      state.loading = false;
      state.message = "Server Error";
    })
    .addCase("removeError", (state, action) => {
      state.message = null;
    });
});


export const productDataReducer = createReducer({}, (builder) => {
    builder
      .addCase("productDataRequest", (state, action) => {
        state.loading = true;
      })
      .addCase("productDataSuccess", (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.message = action.message;
      })
      .addCase("productDataError", (state, action) => {
        state.loading = false;
        state.message = "Server Error";
      })
      
});
  

export const loginReducer = createReducer({}, (builder) => {
    builder
      .addCase("loginRequest", (state, action) => {
        state.loading = true;
      })
      .addCase("loginSuccess", (state, action) => {
        state.loading = false;
        state.message = action.message;
      })
      .addCase("loginError", (state, action) => {
        state.loading = false;
        state.message = "Server Error";
      })
    
});
  

export const registerReducer = createReducer({}, (builder) => {
    builder
      .addCase("registerRequest", (state, action) => {
        state.loading = true;
      })
      .addCase("registerSuccess", (state, action) => {
        state.loading = false
        state.message = action.message;
      })
      .addCase("registerError", (state, action) => {
        state.loading = false;
        state.message =  action.message;
      })
   
});
  