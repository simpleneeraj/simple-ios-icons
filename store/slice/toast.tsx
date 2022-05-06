import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ToastType } from "typings";

const init: ToastType = {
  isToast: false,
};

const toastSlice = createSlice({
  name: "toast",
  initialState: init,
  reducers: {
    openToast: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        isToast: action.payload,
      };
    },
  },
});

const toast = toastSlice.reducer;

export const openToast = toastSlice.actions.openToast;

export default toast;
