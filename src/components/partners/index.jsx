import React from "react";
import Style from "./style.module.scss";
import logo1 from "../../assets/images/jiggle.png";
import logo2 from "../../assets/images/syntric.png";
import logo3 from "../../assets/images/resecurb.png";
import logo4 from "../../assets/images/wishelp.png";

export default function Partners() {
  return (
    <>
      <section className={Style.partners}>
        <div className={Style.container}>
          <h2>Bizga ishonch bildirgan tashkilotlar</h2>
          <div className={Style.image__wrapper}>
            <div className={Style.item}>
              <img src={logo1} alt="Logo of Copany " />
            </div>
            <div className={Style.item}>
              <img src={logo2} alt="Logo of Copany" />
            </div>
            <div className={Style.item}>
              <img src={logo3} alt="Logo of Copany" />
            </div>
            <div className={Style.item}>
              <img src={logo4} alt="Logo of Copany" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
