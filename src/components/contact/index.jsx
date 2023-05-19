import React from "react";
import Style from "./style.module.scss";
import email from "../../assets/images/email1.png";
import phone from "../../assets/images/phone.png";
import location from "../../assets/images/location.png";
import rectangle from "../../assets/images/rectangle.png";
import { ImFacebook } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { AiFillLinkedin } from "react-icons/ai";
export default function Contact() {
  return (
    <>
      <div className={Style.contact}>
        <div className={Style.container}>
          <button>Biz bilan aloqa</button>
          <h1>Biz bilan aloqaga chiqing!</h1>
          <p>
            Biz sizni qiziqtirgan har qanday savollarga javob beramiz yoki
            takliflaringizni qabul qilamiz.
          </p>
          <div className={Style.contact__items}>
            <div className={Style.left__side}>
              <div className={Style.item}>
                <img src={email} alt="Email" />
                <h3>Email</h3>
                <p>contact@flex.co</p>
              </div>
              <div className={Style.item}>
                <img src={phone} alt="Phone" />
                <h3>Telefon</h3>
                <p> +7-843-672-431</p>
              </div>

              <div className={Style.item}>
                <img src={location} alt="Location" />
                <h3>Office</h3>
                <div className={Style.unique__location}>
                  <p> Toshkent sh. Yunusobod t. </p>
                  <p>20-kvartal, 707-uy</p>
                </div>
              </div>

              <div className={Style.item}>
                <img src={rectangle} alt="Rectangel" />
                <h3>Ijtimoiy tarmoqlarda</h3>
                <ul className={Style.social}>
                  <li>
                    <a href="#">
                      <ImFacebook />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <BsTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FiInstagram />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <AiFillLinkedin />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={Style.right__sight}>
              <div className={Style.card}>
                <h4>Email</h4>
                <input type="email" placeholder="pat@shuffle.dev" />
                <h4>Xabar</h4>
                <textarea
                  cols="30"
                  rows="10"
                  placeholder="Matn
                  kiriting"
                  className={Style.text}
                ></textarea>
                <br />
                <button>Jo’natish</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
