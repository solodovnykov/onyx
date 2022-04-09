import styles from "../styles/Test.module.scss";
import Head from "next/head";
import MainContent from "../components/MainContent/MainContent";
import client from "../contentful";

export default function Home({ home }) {
  return (
    <>
      <Head>
        <title>{home ? home.fields.title : "Onyx"}</title>
      </Head>
      <MainContent props={home} />
    </>
  );
}

export const getServerSideProps = async () => {
  const home = await client.getEntries({
    content_type: "onyx",
    limit: 1,
  });

  const [homePage] = home.items;
  return {
    props: {
      home: homePage,
    },
  };
};
