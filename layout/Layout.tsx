import React from "react";
import Footer from "../components/Global/Footer/Footer";
import Navbar from "../components/Global/Navbar/Navbar";
import TopButton from "../components/Global/TopButton/TopButton";
import { ChildrenType } from "../util/interface/interfaces";

function Layout({ children }: ChildrenType) {
  return (
    <div id="top">
      <Navbar />
      {children}
      <Footer />
      <TopButton />
    </div>
  );
}

export default Layout;
