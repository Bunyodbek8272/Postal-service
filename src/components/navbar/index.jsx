import React from "react";

import styleNav from "./navBar.module.scss";
import logo from "../../assets/images/logo.png";
export default function Navbar() {
  return (
    <>
      <nav className={styleNav.nav}>
        <img src={logo} alt="Logo" />
        <ul>
          <li>
            <a href="#">Biz xaqimizda</a>
          </li>
          <li>
            <a href="#">Imkoniyatlar</a>
          </li>
          <li>
            <a href="#">Biz bilan aloqa</a>
          </li>
        </ul>
        <button>Kirish</button>
      </nav>
    </>
  );
}
