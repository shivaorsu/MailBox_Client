import React from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { readMessage } from "../Store/compose-action";



const MessageBox=()=>{

    const location=useLocation()
    const data=location.state;
    console.log(data)
    const dispatch=useDispatch()

    const messageReadHandler=()=>{
        dispatch(readMessage(data))
     }
     messageReadHandler()
    return(
        <div>
            <span className="message">{data.message}</span>
        </div>
    )


}
export default MessageBox;