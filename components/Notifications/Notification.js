import { useState, useEffect } from "react";
import styles from "./Notification.module.scss";

const Notification = (props) => {
  const [exit, setExit] = useState(0);
  const [width, setWidth] = useState(0);
  const [intervalID, setIntervalID] = useState(null);

  const handleStartTimer = () => {
    const id = setInterval(() => {
      setWidth((prev) => {
        if (prev < 100) {
          return prev + 0.5;
        }

        clearInterval(id);

        return prev;
      });
    }, 20);

    setIntervalID(id);
  };

  const handlePauseTimer = () => {
    clearInterval(intervalID);
  };

  const handleCloseNatification = () => {
    handlePauseTimer();
    setExit(true);
    setTimeout(() => {
      props.dispatch({
        type: "REMOVE_NOTIFICATION",
        id: props.id,
      });
    }, 400);
  };

  useEffect(() => {
    if (width === 100) {
      handleCloseNatification();
    }
  }, [width]);

  useEffect(() => {
    handleStartTimer();
  }, []);

  return (
    <div
      onMouseEnter={handlePauseTimer}
      onMouseLeave={handleStartTimer}
      className={`${styles.notificationItem} ${exit ? styles.exit : ""}`}>
      <p>{props.message}</p>
      <div style={{ width: `${width}%` }} className={styles.bar} />
    </div>
  );
};

export default Notification;
