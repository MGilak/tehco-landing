import { useState, useEffect } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi2";
import { services } from "./data";

import Header from "./components/header/Header";
import Slider from "./components/slider/Slider";
import Footer from "./components/footer/Footer";

import "./App.css";

function App() {
  const [loadWin, setLoadWin] = useState(false);
  let [slider, setSlider] = useState(1);

  const slides = [{ id: 1 }, { id: 1 }];

  useEffect(() => {
    setLoadWin(true);
  }, [loadWin]);

  const incHandler = () => {
    if (slider >= slides.length - 1) {
      setSlider(0);
    } else {
      setSlider(slider + 1);
    }
  };

  const decHandler = () => {
    if (slider <= 0) {
      setSlider(1);
    } else {
      setSlider(slider - 1);
    }
  };

  // useEffect(() => {
  //   const intervalSlider = setInterval(() => {
  //     incHandler();

  //     return clearInterval(intervalSlider);
  //   }, 7000);
  // }, [slider]);

  return (
    <>
      <header>
        <Header />
      </header>
      <div className="main_top">
        {slider === 0 ? (
          <div>
            <img
              className={`slider_image ${loadWin && "load"}`}
              src="./images/slider-1.jpg"
              alt="slider"
            />
          </div>
        ) : (
          <img
            className={`slider_image ${loadWin && "load"}`}
            src="./images/slider-2.jpg"
            alt="slider"
          />
        )}

        {slider === 0 ? (
          <div className={`main_title_1 ${loadWin && "load"}`}>
            <h1>ارائه و اجرای برنامه‌ نویسی</h1>
            <div className="main_title_down">
              <h3>خدمات تولید نرم‌افزار، وب‌افزار</h3>
              <h3>ارائه خدمات تولید و پشتیبانی نرم‌افزار و طراحی سایت</h3>
            </div>
          </div>
        ) : (
          <div className={`main_title_2 ${loadWin && "load"}`}>
            <div className="main_title_2_item">
              <h3>تهکو پلی به معرفی شما در دنیای دیجیتال</h3>
            </div>
            <div className="main_title_2_item">
              <h1>خدمات سئو و تولید محتوا</h1>
            </div>
            <div className="main_title_2_item">
              <h2>
                ارائه خدمات بهینه‌سازی موتورهای جست‌وجو و بازاریابی محتوایی
              </h2>
            </div>
          </div>
        )}

        <div className="arrow_icons">
          <div onClick={incHandler} className="right_arr center">
            <HiChevronRight />
          </div>
          <div onClick={decHandler} className="left_arr center">
            <HiChevronLeft />
          </div>
        </div>
      </div>

      <section className="content">
        <div className="title">
          <h1>شرکت تهکو ارائه خدمات فناوری اطلاعات</h1>
        </div>

        <div className="services">
          <ul>
            {services.map((item) => (
              <li key={item.id}>
                <img src={item.img} alt="service" />
                <p>{item.title}</p>
              </li>
            ))}
          </ul>

          <div className="service_content">
            <div className="service_content_info">
              <div className="title">
                <h1>شبکه و زیرساخت</h1>
              </div>

              <div className="body">
                <p>
                  با لطف خداوند و همت تیم خلاق و جوان تهکو توانسته ایم تا به
                  امروز پشتیبان تمام نیاز های مشتریان و خدمات ارائه شده به
                  مخاطبین شرکت باشیم. با توجه به عملکرد و دستاوردهای پیشین از
                  میزان رضایت مندی مشتریان عزیز این نوید را خواهیم داد که شرکت
                  تهکو همچنان برروی خدمات خود پایداری داشته باشد و به مشتریان
                  خود خدمات ارائه دهد. از این رو تهکو در طی مدت کوتاهی توانست
                  جلب رضایت بسیاری از مشتریان را معطوف خود نماید و تواسته ایم
                  نیازهای مشتریان را در کوتاه ترین زمان فراهم آوریم. تهکو برای
                  خدمات خود برای مشتریان عزیز بصورت 7*24 خدمات رسانی خواهد کرد.
                </p>
              </div>

              <div className="button">
                <button className="main_button">
                  <span>
                    <span>اطلاعات بیشتر</span>
                    <BsArrowLeft />
                  </span>
                  <span>
                    <span>اطلاعات بیشتر</span>
                    <BsArrowLeft />
                  </span>
                </button>
              </div>
            </div>

            <div className="service_content_image">
              <img src="./images/pair-programming.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="announce">
        <div className="container">
          <h1>تهکو برای همکاری، اعلام آمادگی می‌نماید.</h1>
          <h3>جهت ارتباط و استعلام می‌توانید اقدام نمایید.</h3>
          <div>
            <button className="main_button">
              <span>ارتباط با ما</span>
              <span>ارتباط با ما</span>
            </button>
          </div>
        </div>
      </section>

      <section className="slider">
        <Slider />
      </section>

      <Footer />

      <div className="test"></div>
    </>
  );
}

export default App;
