import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsEletemts = state.dialogsData.map((d) => (
    <DialogItem key={d.id} name={d.name} id={d.id} />
  ));
  let messagesElements = state.messagesData.map((m) => (
    <Message key={m.id} message={m.message} />
  ));

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  };

  if (!props.isAuth) return <Redirect to={"/login"} />;

  return (
    <div className={s.wrap}>
      <h2 className={s.title}>Dialogs</h2>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>{dialogsEletemts}</div>
        <div className={s.messagesItems}>
          <div>{messagesElements}</div>
          <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>
      </div>
    </div>
  );
};

const AddMessageForm = (props) => {
  return (
    <form className={s.messageNew} onSubmit={props.handleSubmit}>
      <div>
        <Field
          className={s.messageNewTextarea}
          component="textarea"
          name="newMessageBody"
          placeholder="your message..."
          cols="40"
          rows="3"
        />
      </div>
      <div>
        <button className={s.messageNewButton}>Send</button>
      </div>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(AddMessageForm);

export default Dialogs;
