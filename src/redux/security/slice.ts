import {createSlice ,PayloadAction} from "@reduxjs/toolkit";

interface securityState{
  open: boolean;
  pwd: string;
  newPwd: string;
  captcha: string;
  progress: boolean;
  result: string;
}
export const initialSecurityState:securityState = {
  open: false,
  pwd: "",
  newPwd: "",
  captcha: "",
  progress: false,
  result: "error",
}

export const securitySlice = createSlice({
  name: 'security',
  initialState: initialSecurityState,
  reducers: {
    setOpen: (state, action:PayloadAction<boolean>) => {
      state.open = action.payload;
    },
    setPwd: (state, action:PayloadAction<string>) => {
      state.pwd = action.payload;
    },
    setNewPwd: (state, action:PayloadAction<string>) => {
      state.newPwd = action.payload;
    },
    setCaptcha: (state, action:PayloadAction<string>) => {
      state.captcha = action.payload;
    },
    setProgress: (state, action:PayloadAction<boolean>) => {
      state.progress = action.payload;
    },
    clear: state => {
      state.open = false;
      state.pwd = "";
      state.newPwd = "";
      state.captcha = "";
      state.progress = false;
    }
  },
})
