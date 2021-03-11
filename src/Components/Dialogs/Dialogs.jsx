import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsEletemts = props.state.dialogsData.map((d) => (
    <DialogItem key={d.id} name={d.name} id={d.id} />
  ));

  let messagesElements = props.state.messagesData.map((m) => (
    <Message key={m.id} message={m.message} />
  ));

  return (
    <div className={classes.wrap}>
      <div className={classes.title}>Dialogs</div>
      <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>{dialogsEletemts}</div>
        <div className={classes.messagesItems}>{messagesElements}</div>
      </div>
    </div>
  );
};

export default Dialogs;
