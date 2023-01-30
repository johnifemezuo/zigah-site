import "bootstrap/dist/css/bootstrap.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { hotjar } from "react-hotjar";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    hotjar.initialize(3343663, 6);
  }, []);

  return <Component {...pageProps} />;
};

export default MyApp;
