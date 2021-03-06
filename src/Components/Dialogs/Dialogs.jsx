import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Dialogs.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={classes.dialog}>
      <NavLink to={path} activeClassName={classes.activeLink}>
        {props.name}
      </NavLink>
    </div>
  );
};
const Message = (props) => {
  return <div className={classes.message}>{props.message}</div>;
};

const Dialogs = (props) => {
  let dialogsData = [
    { id: 1, name: "Oleh" },
    { id: 2, name: "Hanna" },
    { id: 3, name: "Iryna" },
    { id: 4, name: "Serge" },
    { id: 5, name: "Niklas" },
    { id: 6, name: "Manuel" },
    { id: 7, name: "Tomas" },
    { id: 8, name: "Robert" },
  ];

  let messagesData = [
    { id: 1, message: "Hi!!!" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "Very well!" },
    { id: 4, message: "Yo" },
    { id: 5, message: "Yo" },
    { id: 6, message: "Yo" },
  ];

  let dialogsEletemts = dialogsData.map((d) => (
    <DialogItem key={d.id} name={d.name} id={d.id} />
  ));
  let messagesElements = messagesData.map((m) => (
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
