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
        sent: { To: mail, message },
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
        inbox: { From: email, message },
      }
    );
  };
};
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
            To: response.data[key].sent.To,
            message: response.data[key].sent.message,
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
            From: response.data[key].inbox.From,
            message: response.data[key].inbox.message,
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