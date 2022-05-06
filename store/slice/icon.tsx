import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IconStateType } from "typings";

const init: IconStateType = {
  name: "",
  iconPath: "",
};

const iconSlice = createSlice({
  name: "icon",
  initialState: init,
  reducers: {
    setIconName: (_state, action: PayloadAction<any>) => {
      return action.payload;
    },
  },
});

export const { setIconName } = iconSlice.actions;

export default iconSlice.reducer;
