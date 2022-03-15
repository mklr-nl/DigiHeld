import Head from "next/head";
import { Home } from "../components/home";
import "@fontsource/poppins";
import { Fragment } from "react";

function HomePage() {
  return (
    <Fragment>
      <Head>
        <title>Digiheld | Digital Product Development and Investment</title>
        <meta
          name="description"
          content="Digital Product Development and Investment"
        />
      </Head>
      <Home />
    </Fragment>
  );
}

export default HomePage;
