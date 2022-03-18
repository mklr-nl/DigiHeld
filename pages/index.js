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
          property="og:title"
          content="Digiheld | Digital Product Development and Investment"
        />
        <meta
          name="description"
          property="og:description"
          content="Digital products are programming code-based assets that deliver an interactive value proposition to the final user. ✓ Problem-solving Entrepreneurship"
        />
        <meta property="og:url" content="https://www.digiheld.nl/" />
        <meta property="og:image" content="/images/digiheld-logo.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Home />
    </Fragment>
  );
}

export default HomePage;
