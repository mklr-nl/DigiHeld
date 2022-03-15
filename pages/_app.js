import Head from "next/head";

import Layout from "../components/layout/layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Digiheld | Digital Product Development and Investment</title>
        <meta
          name="description"
          content="Digital products are programming code-based assets that deliver an interactive value proposition to the final user. ✓ Problem-solving Entrepreneurship"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
