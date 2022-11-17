import {createSlice} from "@reduxjs/toolkit";


export const initialSecurityState = {
  open: false,
  pwd: "",
  newPwd: "",
  captcha: "",
  progress: false,
}

export const securitySlice = createSlice({
  name: 'security',
  initialState: initialSecurityState,
  reducers: {
    setOpen: (state, action) => {
      state.open = action.payload;
    },
    setPwd: (state, action) => {
      state.pwd = action.payload;
    },
    setNewPwd: (state, action) => {
      state.newPwd = action.payload;
    },
    setCaptcha: (state, action) => {
      state.captcha = action.payload;
    },
    setProgress: (state, action) => {
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
