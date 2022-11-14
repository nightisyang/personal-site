import "../styles/globals.css";
import "../styles/burger.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      <Head>
        {/* <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        /> */}
      </Head>
      {getLayout(<Component {...pageProps} />)};
    </>
  );
}

export default MyApp;
