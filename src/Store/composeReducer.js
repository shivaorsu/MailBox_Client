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
    onRead(state,action){
      const id=action.payload;
      const existing=[...state.recievedData];
      existing.forEach((ele,ind)=>{
        if(ele.id===id){
          existing[ind].read=true

        }
      });
      state.recievedData=existing;
    },
    deleteInbox(state,action){
      const id=action.payload
      const newInbox=[...state.recievedData];
      state.recievedData=newInbox.filter((ele)=>ele.id !==id);
    },
    deletesentbox(state,action){
      const id=action.payload;
      const newSentbox=[...state.recievedData];
      state.recievedData=newSentbox.filter((ele)=>ele.id !==id);

    }
    
  },
});

export const composeActions = composeSlice.actions;

export default composeSlice.reducer;