//import { useSelector } from "react-redux";
import axios from "axios";
import { composeActions } from "./composeReducer";

export const composeMail = (mail, message) => {
  return async (dispatch) => {
    const email = localStorage.getItem("email");
    const short = email.replace(/[^a-zA-Z0-9]/g, "");
    const sent = await axios.post(
      `https://mail-box-382e9-default-rtdb.firebaseio.com/${short}.json`,
      {
        sent: { To: mail, message, read: false },
      }
    );
    if (sent.status === 200) {
      console.log(sent);
      dispatch(
        composeActions.compose({
          mail: mail,
          message: message,
        })
      );
    }
    const shorts = mail.replace(/[^a-zA-Z0-9]/g, "");
    await axios.post(
      `https://mail-box-382e9-default-rtdb.firebaseio.com/${shorts}.json`,
      {
        inbox: { From: email, message, read: false },
      }
    );
  };
};

export const readMessage=(data)=>{
  return async(dispatch)=>{
    const readingData=async()=>{

    const email = localStorage.getItem("email");
    const short = email.replace(/[^a-zA-Z0-9]/g, "");
      const sent = await axios.put(
        `https://mail-box-382e9-default-rtdb.firebaseio.com/${short}/${data.id}/inbox.json`,
        {
          From:data.From,
          message:data.message,
          read:true
        }
      );
      if(sent.status===200){
        console.log(sent.data);
        dispatch(composeActions.onRead(data.id))
      }

    }
    readingData()
  }
}

export const fetchSentMail = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const email = localStorage.getItem("email");
      const mail = email.replace(/[^a-zA-Z0-9]/g, "");
      const response = await axios.get(
        `https://mail-box-382e9-default-rtdb.firebaseio.com/${mail}.json`
      );
      console.log(response.data);
      let data = [];
      for (const key in response.data) {
        if (response.data[key].sent) {
          data.push({
            id:key,
            To: response.data[key].sent.To,
            message: response.data[key].sent.message,
            read:response.data[key].sent.read
          });
        }
      }
      console.log(data);
      return data;
    };
    const data = await fetchData();
    dispatch(composeActions.fetchSentData(data));
  };
};

export const fetchRecievedMail = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const email = localStorage.getItem("email");
      const mail = email.replace(/[^a-zA-Z0-9]/g, "");
      const response = await axios.get(
        `https://mail-box-382e9-default-rtdb.firebaseio.com/${mail}.json`
      );
      console.log(response.data);
      let data = [];
      for (const key in response.data) {
        if (response.data[key].inbox) {
          data.push({
            id:key,
            From: response.data[key].inbox.From,
            message: response.data[key].inbox.message,
            read:response.data[key].inbox.read
          });
        }
      }
      console.log(data);
      return data;
    };
    const data = await fetchData();
    dispatch(composeActions.fetchRecievedData(data));
  };
};

export const deleteMessage=(id)=>{
  return async(dispatch)=>{
    const email=localStorage.getItem("email");
    const mail=email.replace(/[^a-zA-Z0-9]/g, "");
    const response= await axios.delete(
      `https://mail-box-382e9-default-rtdb.firebaseio.com/${mail}/${id}.json`
    );
    if (response.status===200){
      console.log(response);
      dispatch(composeActions.deleteInbox(id))
    }
  }

};
export const deleteSentMessage = (id) => {
  return async (dispatch) => {
    const email = localStorage.getItem("email");
    const mail = email.replace(/[^a-zA-Z0-9]/g, "");
    const response = await axios.delete(
      `https://mail-box-382e9-default-rtdb.firebaseio.com/${mail}/${id}.json`
    );
    if (response.status === 200) {
      console.log(response);
      dispatch(composeActions.deleteSentbox(id));
    }
  };
};
