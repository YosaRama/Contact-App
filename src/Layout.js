import React from "react";
import Contact from "./component/Contact";
import ContactHeader from "./component/Header";
import "./scss/style.scss";

function Layout() {
  return (
    <>
      <ContactHeader />
      <Contact />
    </>
  );
}

export default Layout;
