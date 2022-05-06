import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "Search",
    initialState: '',
    reducers: {
        onSearch: (_state, action) => {
            return action.payload
        },
    },
});

export default searchSlice;


