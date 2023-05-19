import React from "react";
import Style from "./style.module.scss";
import pen from "../../assets/images/image-pen.png";
import envelope from "../../assets/images/image-envelope.png";
import massage__img from "../../assets/images/massage.png";
import form__img from "../../assets/images/form.png";
import light__img from "../../assets/images/light.png";
import test from "../../assets/images/view.png";
import dots from "../../assets/images/dots.png";
export default function Statistics() {
  return (
    <>
      <section className={Style.statistics}>
        <div className={Style.container}>
          <button>Raqamlar</button>
          <h1>Faoliyatimiz xaqida raqamlar gapirganda</h1>
          <p className={Style.subtitle}>
            2 yillik faoliyat va ushbu natijalar. Adolatli baholash sizdan!
          </p>
          <div className={Style.content}>
            <div className={Style.left__side}>
              <div className={Style.item}>
                <h1>235.000</h1>
                <h3>Yetkazib berilgan xatlar</h3>
                <p>
                  Hamkorlarimiz bizga ishonib topshirgan xatlarini o’z vaqtida
                  manzillariga yetkazganmiz
                </p>
              </div>
              <div className={Style.item}>
                <h1>200</h1>
                <h3>Hudud bo’ylab</h3>
                <p>
                  Biz Toshkent shaxri va Toshkent viloyatining har bir
                  mahallasiga kirib boramiz
                </p>
              </div>
              <div className={Style.item}>
                <h1>+100</h1>
                <h3>Kurierlar</h3>
                <p>
                  Bizning kurierlarimiz tez va ishonchli faoliyat olib borishadi
                </p>
              </div>
            </div>
            <div className={Style.right__side}>
              <img src={pen} alt="Statistics image" />
            </div>
          </div>
        </div>
      </section>

      <section className={Style.statistics__bottom}>
        <div className={Style.container}>
          <div className={Style.content}>
            <div className={Style.left__side}>
              <img className={Style.above} src={test} alt="test" />
              <img src={envelope} alt="Statistics image" />
              <img className={Style.dots} src={dots} alt="Dots" />
            </div>
            <div className={Style.right__side}>
              <div className={Style.item}>
                <img
                  className={Style.img__text}
                  src={massage__img}
                  alt="img1"
                />
                <div className={Style.texts}>
                  <h2>Real vaqtda kuzatish</h2>
                  <p>
                    Har bir xatingiz xolatini real vaqtda kuzatib turish
                    imkoniyati mavjud.
                  </p>
                </div>
              </div>

              <div className={Style.item}>
                <img src={light__img} alt="img1" className={Style.img__text} />
                <div className={Style.texts}>
                  <h2>Oylik, yillik statistikalar</h2>
                  <p>
                    Biz bilan amalga oshirayotgan xamkorligingizning
                    potensialini shaffof xolatda kuzatib turishingiz uchun
                    statistika va xisobotlarni ko’rib turish imkoniyati
                  </p>
                </div>
              </div>

              <div className={Style.item}>
                <img src={form__img} alt="img1" className={Style.img__text} />
                <div className={Style.texts}>
                  <h2>Masofaviy ishlash</h2>
                  <p>
                    Yetkazmalaringizni bizga taqdim qilish uchun ofisingizda
                    chiqishingiz shart emas. Shunchaki hammasini web ilovamiz
                    orqali bizga uzating!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
