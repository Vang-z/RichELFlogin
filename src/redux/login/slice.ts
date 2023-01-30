import {createSlice ,PayloadAction} from "@reduxjs/toolkit";

interface loginState{
  username: string;
  pwd: string;
  agreement: boolean;
  rememberMe: boolean;
}
export const initialLoginState : loginState= {
  username: "",
  pwd: "",
  agreement: false,
  rememberMe: false,
}

export const loginSlice = createSlice({
  name: 'auth',
  initialState: initialLoginState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPwd: (state, action: PayloadAction<string>) => {
      state.pwd = action.payload;
    },
    setAgreement: (state, action: PayloadAction<boolean>) => {
      state.agreement = action.payload;
    },
    setRememberMe: (state, action: PayloadAction<boolean>) => {
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
