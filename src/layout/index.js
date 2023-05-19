import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import LayoutStyle from "./style.module.scss";
export default function WelcomeLayout({ children }) {
  return (
    <div className={LayoutStyle.container}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
