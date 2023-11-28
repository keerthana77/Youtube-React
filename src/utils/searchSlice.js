import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {

    },
    reducers: {
        cacheResults: (state, action) => {
            // console.log(state, action)
            // state = { ...action.payload, ...state };
            Object.assign(state, action.payload)
        }
    }
})

export const { cacheResults } = searchSlice.actions;

export default searchSlice.reducer;