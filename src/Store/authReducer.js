import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {token:'',isAuthenticated:false,email:''}
const authSlice = createSlice({
    name:'auth',
    initialState: initialAuthState,
    reducers:{
        login(state,action) {
           state.isAuthenticated=true
           state.token=action.payload.token
           state.email=action.payload.email
           console.log(state.token,state.email);
        }
    }
})

export const authActions = authSlice.actions

export default authSlice.reducer