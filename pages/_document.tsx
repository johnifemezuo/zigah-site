import { Html, Head, Main, NextScript } from "next/document";

import React from "react";

// eslint-disable-next-line no-underscore-dangle
function _document() {
  return (
    <Html>
      <Head>
        <meta
          name="description"
          content="Zigah Website"
        />
        <link rel="icon" type="image/png" href="img/tablogo4.png" />

      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default _document;
