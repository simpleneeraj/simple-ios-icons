import { configureStore } from "@reduxjs/toolkit";
// OUR Reducer
import icon from "./slice/icon";
import searchSlice from "./slice/search";
import toast from "./slice/toast";

const store = configureStore({
  reducer: {
    icon,
    toast,
    search: searchSlice.reducer,
  },
});

export default store;
