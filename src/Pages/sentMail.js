import React, { useEffect } from "react";
import axios from "axios";
const SentMail = () => {
  useEffect(() => {
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
    };
    fetchData();
  });
  return <div></div>;
};

export default SentMail;