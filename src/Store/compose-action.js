//import { useSelector } from "react-redux";
import axios from "axios";
import { composeActions } from "./composeReducer";

export const composeMail = (mail, message) => {
  return async (dispatch) => {
    const email = localStorage.getItem("email");
    const short = email.replace(/[^a-zA-Z0-9]/g, "");
    const sent = await axios.post(
      `https://mailbox-client-0574-default-rtdb.firebaseio.com/${short}.json`,
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
      `https://mailbox-client-0574-default-rtdb.firebaseio.com/${shorts}.json`,
      {
        inbox: { From: email, message },
      }
    );
  };
};