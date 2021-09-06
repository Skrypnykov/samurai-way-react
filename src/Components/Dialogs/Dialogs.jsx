import React from "react";
import s from "./Dialogs.module.css";
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
    <div className={s.wrap}>
      <div className={s.title}>Dialogs</div>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>{dialogsEletemts}</div>
        <div className={s.messagesItems}>{messagesElements}</div>
      </div>
    </div>
  );
};

export default Dialogs;
