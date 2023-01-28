import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name : "auth",
    initialState:{
        isLoggIn : true
    },
    reducers : {
        login(state){
            state.isLoggIn = true
        },
        logout(state) {
            state.isLoggIn =false
         }
    }
})


export const authAction = authSlice.actions
export default authSlice