import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentuser: null,
    loading: false,
    error: false
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInStart: (state) => {
            state.loading = true;
        }
    }
})