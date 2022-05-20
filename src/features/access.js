import { createSlice } from "@reduxjs/toolkit";


const initialSateValue = {
    modal: false,
};


export const accessSlice = createSlice({
    name: "access",
    initialState: {
        value: initialSateValue,
    },
    reducers: {
        openAccess: (state, action) => {
          console.log( 'openAccess' );
            state.value = { modal: true }
        },

        closeAccess: (state, action) => {
            state.value = { modal: false}
        }
    }
});

export const { openAccess, closeAccess } = accessSlice.actions;

export default accessSlice.reducer;