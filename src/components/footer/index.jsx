import React from "react";
import Style from "./style.module.scss";
import logo from "../../assets/images/logo.png";
export default function Footer() {
  return (
    <>
      <footer>
        <div className={Style.content}>
          <img src={logo} alt="Logo" />
          <ul className={Style.menu}>
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
          <hr className={Style.line} />
          <p>© 2021 TRIUMF. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
