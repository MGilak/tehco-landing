import { useState, useEffect } from "react";
import "./App.css";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi2";
import Header from "./components/header/Header";

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
        
      </section>
    </>
  );
}

export default App;
