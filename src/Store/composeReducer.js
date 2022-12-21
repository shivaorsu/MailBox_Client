import { createSlice } from "@reduxjs/toolkit";

const composeSlice = createSlice({
  name: "compose",
  initialState: { sent: {}, sentData:[],recievedData:[]},
  reducers: {
    compose(state, action) {
      state.sent = {
        mail: action.payload.mail,
        message: action.payload.message,
      };
      console.log(state.sent);
    },
    fetchSentData(state, action) {
      state.sentData = action.payload;
      console.log(state.sentData);
    },
    fetchRecievedData(state, action) {
      state.recievedData = action.payload;
      console.log(state.recievedData);
    },
  },
});

export const composeActions = composeSlice.actions;

export default composeSlice.reducer;