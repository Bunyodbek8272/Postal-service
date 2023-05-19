import React from "react";
import HeaderStyle from "./header.module.scss";
import Navbar from "../navbar";
import headImg from "../../assets/images/headImg.png";
import test from "../../assets/images/view.png";
import test2 from "../../assets/images/Shape.png";
export default function Header() {
  return (
    <section className={HeaderStyle.header}>
      <div className={HeaderStyle.container}>
        <Navbar />
        <div className={HeaderStyle.contents}>
          <h1 className={HeaderStyle.title}>
            Pochta xizmatining eng sifatli va tezkor xizmati bizda!
          </h1>
          <p>
            Maktublar va yetkazmalaringizni tez va oson yetkazib berishingizda
            ko’maklashamiz!
          </p>
          <img className={HeaderStyle.test} src={test} />
          <img src={headImg} alt="headImg" />
          <img className={HeaderStyle.test2} src={test2} />
        </div>
      </div>
    </section>
  );
}
