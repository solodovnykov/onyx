import { useReducer, createContext, useState } from "react";
import { v4 } from "uuid";
import Notification from "./Notification";
import styles from "./Notification.module.scss";

export const NotificationContext = createContext();

const NotificationProvider = (props) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "ADD_NOTIFICATION":
        return [...state, { ...action.payload }];
      case "REMOVE_NOTIFICATION":
        return state.filter((el) => el.id !== action.id);
      default:
        return state;
    }
  }, []);

  let widnowWidth = 0;

  // if (typeof window !== "undefined") {
  //   widnowWidth = window.innerWidth;
  //   console.log(widnowWidth);
  // }

  if (typeof window !== "undefined") {
    widnowWidth = window.innerWidth <= 1350 ? styles.mobile : styles.desktop;
  }

  return (
    <NotificationContext.Provider value={dispatch}>
      <div className={`${styles.notificationWrapper}`}>
        {state.slice(0, 1).map((note) => {
          return (
            <Notification
              dispatch={dispatch}
              key={note.id}
              {...note}
              count={state.length}
            />
          );
        })}
      </div>
      {props.children}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
