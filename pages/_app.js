import { useContext } from "react";
import Layout from "../components/Layout/Layout";
import NotificationProvider, {
  NotificationContext,
} from "../components/Notifications/NotificationProvider";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <NotificationProvider>
        <Component {...pageProps} />
      </NotificationProvider>
    </Layout>
  );
}

export default MyApp;
