import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  
  let state = props.dialogsPage;

  let dialogsEletemts = state.dialogsData.map( d => <DialogItem key={d.id} name={d.name} id={d.id} />);
  let messagesElements = state.messagesData.map( m => <Message key={m.id} message={m.message} />);
  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  }

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  }

  return (
    <div className={s.wrap}>
      <div className={s.title}>Dialogs</div>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>{dialogsEletemts}</div>
        <div className={s.messagesItems}>
          <div>{messagesElements}</div>
          <div className={s.messageNew}>
            <div>
              <textarea
                value={newMessageBody}
                onChange={onNewMessageChange}
                placeholder="your message..."
                name="comment"
                cols="40"
                rows="3"
              ></textarea>
            </div>
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
