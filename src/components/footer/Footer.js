import React from "react";
import "./footer.css";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRegEnvelope,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="about">
          <div className="title">
            <h4>درباره ما</h4>
          </div>
          <div className="body">
            <img src="./images/Logo-1-mono-white-256.png" alt="" />
            <p>
              شركت توسعه ارتباطات هيركان به اختصار (تهکو) به شناسه ملی
              14001987942 با اتکا بر علم و هنر مدیريت در حوزه فناوري اطلاعات و
              ارتباطات با هدف استفاده از فرصت هاي نوین تجارت الكترونيك وكسب و
              كار، ایجاد بستر مناسب و ایمن جهت ترویج بهترین و به روزترین علوم و
              فنون طراحی و تبلیغات، خدمات و فعالیت های خود را به نحو احسن عرضه
              می کند.
            </p>
          </div>
        </div>

        <div className="license">
          <div className="title">
            <h4>مجوزها</h4>
          </div>

          <div className="body">
            <img src="./images/nezam_senfi.png" alt="" />
            <img src="./images/nezam_senfi.png" alt="" />
          </div>
        </div>

        <div className="contacts">
          <div className="title">
            <h4>اطلاعات تماس</h4>
          </div>

          <div className="body">
            <ul>
              <li className="address">
                <div className="icon center">
                  <FaMapMarkerAlt />
                </div>
                <div className="text">
                  <p>
                    آدرس دفتر گرگان: خیابان ولیعصر، عدالت 21، کمانگری 5، مجتمع
                    نگاران طبقه دو، واحد غربی
                  </p>
                </div>
              </li>

              <li className="phone">
                <div className="icon center">
                  <FaPhoneAlt />
                </div>
                <div className="text">
                  <p>تلفن: 02191307651</p>
                </div>
              </li>

              <li className="email">
                <div className="icon center">
                  <FaRegEnvelope />
                </div>
                <div className="text">
                  <p> ایمیل: info@tehco.ir</p>
                </div>
              </li>

              <li className="insta">
                <div className="icon center">
                  <FaInstagram />
                </div>
                <div className="text">
                  <p>اینستاگرام: tehco.ir</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer_bottom">
        <div className="container">
          <div className="right">
            <span>
              © کپی رایت ۲۰۲۳ - تمامی حقوق وب سایت متعلق به شرکت{" "}
              <a href="/">توسعه ارتباطات هیرکان (تهکو)</a> می باشد.
            </span>
          </div>

          <div className="left">
            <div className="addv">
              <a href="/">تبلیغات</a>
            </div>

            <div className="line center">
              <div></div>
            </div>

            <div className="privacy">
              <a href="/">سیاست حفظ حریم خصوصی</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
