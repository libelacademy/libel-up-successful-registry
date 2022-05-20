import { createSlice } from "@reduxjs/toolkit";


const initialSateValue = {
    modal: false,
};


export const supportSlice = createSlice({
    name: "support",
    initialState: {
        value: initialSateValue,
    },
    reducers: {
        openSupport: (state, action) => {
            state.value = { modal: true }
        },

        closeSupport: (state, action) => {
            state.value = { modal: false}
        }
    }
});

export const { openSupport, closeSupport } = supportSlice.actions;

export default supportSlice.reducer;