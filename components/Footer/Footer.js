import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className="container">
      <ul className={styles.footer}>
        <li className={styles.head}>
          <div className={styles.logo}></div>
          <div className={styles.SocialLinks}>
            <a
              href="https://discord.gg/PksMvGT4qg"
              target="_blank"
              rel="noreferrer">
              Дискорд
            </a>
            <a
              href="https://vk.com/onyxmcserver"
              target="_blank"
              rel="noreferrer">
              ВКонтакте
            </a>
          </div>
          <div className={styles.ip}>IP: play.onyxmc.xyz</div>
        </li>
        <li className={styles.line} />
        <li className={styles.bottom}>
          <div>
            <p>Copyright © 2022 Onyx. All rights reserved.</p>
          </div>
          <div>
            <p> Created by </p>
            <a
              href="https://github.com/solodovnykov"
              target="_blank"
              rel="noreferrer">
              solodovnykov
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
