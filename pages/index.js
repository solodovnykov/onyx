import styles from "../styles/Test.module.scss";
import Head from "next/head";
import MainContent from "../components/MainContent/MainContent";

export default function Home() {
  return (
    <>
      <Head>
        <title>Onyx | Minecraft сервер</title>
      </Head>
      <MainContent />
    </>
  );
}
