import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/state";

const Dialogs = (props) => {

  let state = props.store.getState().dialogsPage;

  let dialogsEletemts = state.dialogsData.map((d) => ( <DialogItem key={d.id} name={d.name} id={d.id} /> ));
  let messagesElements = state.messagesData.map((m) => ( <Message key={m.id} message={m.message} /> ));
  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  }
  let onNewMessageChange = (e) => {
      let body = e.target.value;
      props.store.dispatch(updateNewMessageBodyCreator(body));
  }

  return (
    <div className={s.wrap}>
      <div className={s.title}>Dialogs</div>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            { dialogsEletemts }
        </div>
        <div className={s.messagesItems}>
            <div>{ messagesElements }</div>
            <div>
              <div><textarea  value={newMessageBody} 
                              onChange={onNewMessageChange}
                              placeholder='Enter your message'></textarea></div>
              <div>
                <button onClick={onSendMessageClick}>Send</button>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
