import {createSlice} from "@reduxjs/toolkit";


export const initialLoginState = {
  username: "",
  pwd: "",
  agreement: false,
  rememberMe: false
}

export const loginSlice = createSlice({
  name: 'auth',
  initialState: initialLoginState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setPwd: (state, action) => {
      state.pwd = action.payload;
    },
    setAgreement: (state, action) => {
      state.agreement = action.payload;
    },
    setRememberMe: (state, action) => {
      state.rememberMe = action.payload;
    },
    clear: state => {
      state.username = "";
      state.pwd = "";
      state.agreement = false;
      state.rememberMe = false;
    }
  },
})
