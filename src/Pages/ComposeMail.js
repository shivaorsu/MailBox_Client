import React, { useRef, useState } from "react";
//import { Editor } from "react-draft-wysiwyg";
//import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import { useDispatch } from "react-redux";
import { composeMail } from "../Store/compose-action";
// import { useDispatch } from "react-redux";
// import { composeMail } from "../../store/compose/compose-actions";
// import Button from "../UI/Button";
import classes from './Compose.module.css';



const ComposeMail = () => {
  const dispatch = useDispatch();
  const [editorInput, setEditorInput] = useState("");
  const emailInputRef = useRef();
  const onEditorStateChange = (contentState) => {
    let text = "";
    contentState.blocks.forEach((e) => {
      text += ` ${e.text}`;
    });
    console.log(text);
    setEditorInput(text);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    // enteredEditor = editorInputRef.current.value;
    dispatch(composeMail(enteredEmail, editorInput));

    event.target.reset();
    setEditorInput("");
  };

  return (
    <section className={classes.compose}>
      <h1>Compose Your Mail..</h1>
      <form onSubmit={onSubmitHandler}>
        <input
          autoComplete="on"
          placeholder="To..."
          type="email"
          ref={emailInputRef}
        />
        <Editor
          //editorState={contentState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          placeholder="Subject...."
          editorStyle={{
            border: "1px solid #C0C0C0",
            height: "10rem",
            padding: "8px",
            overflow: "hidden",
          }}
          onContentStateChange={onEditorStateChange}
        />
        <button>Send</button>
      </form>
    </section>
  );
};

export default ComposeMail;