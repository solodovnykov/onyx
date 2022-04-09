import styles from "./MainContent.module.scss";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useContext } from "react";
import { NotificationContext } from "../Notifications/NotificationProvider";
import { v4 } from "uuid";

const MainContent = () => {
  const dispatch = useContext(NotificationContext);
  const copyIpHandler = () => {
    dispatch({
      type: "ADD_NOTIFICATION",
      payload: {
        id: v4(),
        type: "SUCCESS",
        message: "IP Скопировано",
      },
    });
  };
  return (
    <div className="container">
      <div className={styles.content}>
        <h1 className={styles.mainText}>
          Майнкрафт просто <br /> и со вкусом
        </h1>
        <h2 className={styles.secondText}>
          Сервер, который создан игроками <br /> для игроков
        </h2>
        <div className={styles.btnWrapper}>
          <CopyToClipboard text="play.onyxmc.xyz">
            <div onClick={copyIpHandler} className={styles.btnCopyIp}>
              Скопировать IP
            </div>
          </CopyToClipboard>

          <p className={styles.ip}>play.onyxmc.xyz</p>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
