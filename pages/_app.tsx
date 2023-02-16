import "bootstrap/dist/css/bootstrap.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import { useEffect } from "react";
import { hotjar } from "react-hotjar";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      hotjar.initialize(3343663, 6);
    }
  }, []);
  return (
    <>
      {/* Jivochat Widget */}
      <Script src="//code.jivosite.com/widget/8SAOUV8XTs" />;
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
