import React, { useEffect, useRef, useState } from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset, faL, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FaAngleDoubleDown, FaAngleDoubleLeft } from "react-icons/fa";
import { BsInstagram, BsLinkedin, BsTwitter, BsSearch } from "react-icons/bs";

const Header = () => {
  const [menuSticky, setMenuSticky] = useState(false);
  const [navPosition, setNavPosition] = useState();
  const menuRef = useRef();
  const navRef = useRef();

  useEffect(() => {
    const navEl = navRef.current;
    const navPosition = navEl.getBoundingClientRect().top;
    setNavPosition(navPosition);

    const handleScroll = () => {
      const MenuEl = menuRef.current;
      const menuPosition = MenuEl.getBoundingClientRect().top;
      const scrollTop = document.documentElement.scrollTop;
      console.log(navPosition);
      console.log(scrollTop);

      if (menuPosition <= 0) {
        setMenuSticky(true);
      }
      if (scrollTop <= navPosition) {
        setMenuSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="wide_header">
        <div className="header_logo">
          <a href="/">
            <img src="./images/logo-logistic.png" alt="" />
          </a>
        </div>

        <div className="header_address">
          <div className="connect">
            <div className="headset">
              <FontAwesomeIcon icon={faHeadset} />
            </div>
            <div className="customer_info">
              <div className="customer_phone">
                <strong>تلفن:</strong> ۰۲۱۹۱۳۷۶۵۱
              </div>
              <div className="customer_email">
                <strong>ایمیل:</strong> info@tehco.ir
              </div>
            </div>
          </div>

          <div className="customer">
            <a href="/">
              <FontAwesomeIcon className="plus" icon={faPlus} />
              <span>پرتال مشتریان</span>
            </a>
          </div>
        </div>
      </div>

      <div
        ref={menuRef}
        className={`menu_header center ${menuSticky && "fixed"}`}
      >
        <div className="menu">
          <nav ref={navRef}>
            <ul className="main_menu">
              <li>
                <a href="/">خانه</a>
              </li>

              {/********محصولات*******/}
              <li>
                <a href="/">
                  <span>محصولات</span>
                  <FaAngleDoubleDown />
                </a>

                {/*منوی محصولات*/}
                <ul class="sub_menu">
                  <li>
                    <a href="/">
                      <span>اتوماسیون مدارس</span>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <span>سیستم مدیریت محتوا و پرتال ساز پارسیسم</span>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <span>سامانه مدیریت جلسات و شفافیت آرا</span>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <span>سامانه مدیریت خدمات شهری</span>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <span>سیستم آرشیو الکترونیک</span>
                    </a>
                  </li>
                </ul>
              </li>
              {/********پایان محصولات*********/}

              {/********خدمات*********/}
              <li>
                <a href="/">
                  <span>خدمات</span>
                  <FaAngleDoubleDown />
                </a>
                {/*منوی خدمات*/}
                <ul class="sub_menu">
                  <li>
                    <a href="/">
                      <span>طراحی وبسایت</span>
                    </a>
                    <FaAngleDoubleLeft />
                    <ul class="sub_menu sub1_menu2">
                      <li>
                        <a href="/">
                          <span>پشتیبانی وب افزار</span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <span>استارتاپ و کسب و کار</span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <span>شخصی</span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <span>فروشگاهی</span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <span>سازمانی و اداری</span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <span>شرکتی و خصوصی</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/" class="sf-with-ul">
                      <span>موبایل و اپلیکیشن</span>
                    </a>
                    <FaAngleDoubleLeft />
                    <ul class="sub_menu sub2_menu2">
                      <li>
                        <a href="/" data-title="راهکارهای اداری و سازمانی">
                          <span>راهکارهای اداری و سازمانی</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/">
                      <span>پنل پیامک</span>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <span>دیجیتال مارکتینگ</span>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <span>سامانه مدیریت کسب وکار</span>
                    </a>
                  </li>
                </ul>
              </li>
              {/********پایان خدمات*********/}

              {/********نمونه کار*********/}
              <li>
                <a href="/">
                  <span>نمونه کار</span>
                  <FaAngleDoubleDown />
                </a>
                {/*منوی نمونه کار*/}
                <ul class="sub_menu">
                  <li>
                    <a href="/">
                      <span>وب سایت</span>
                    </a>
                    <FaAngleDoubleLeft />
                    <ul class="sub_menu sub1_menu2">
                      <li>
                        <a href="/">
                          <span>شخصی</span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <span>فروشگاهی</span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <span>سازمانی</span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <span>خدماتی</span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <span>شرکتی</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/">
                      <span>موبایل اپلیکیشن</span>
                    </a>
                    <FaAngleDoubleLeft />
                    <ul class="sub_menu sub2_menu2">
                      <li>
                        <a href="/">
                          <span>شخصی</span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <span>سازمانی</span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <span>استارتاپی</span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <span>خدماتی</span>
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <span>فروشگاهی</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/">
                      <span>گرافیک</span>
                    </a>
                  </li>
                </ul>
              </li>
              {/********پایان نمونه کار*********/}

              {/********پشتیبانی*********/}
              <li>
                <a href="/">
                  <span>پشتیبانی</span>
                  <FaAngleDoubleDown />
                </a>
                {/*منوی نمونه کار*/}
                <ul class="sub_menu">
                  <li>
                    <a href="/">
                      <span>سامانه مشتریان</span>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <span>پشتیبانی وب افزار</span>
                    </a>
                  </li>
                </ul>
              </li>
              {/********پایان پشتیبانی*******/}
              <li>
                <a href="/">وبلاگ</a>
              </li>
              <li>
                <a href="/">درباره ما</a>
              </li>
              <li>
                <a href="/">تماس با ما</a>
              </li>
            </ul>
          </nav>

          <div className="menu_left">
            <div className="social_menu">
              <div className="aparat">
                <a className="center" href="/">
                  <BsTwitter />
                </a>
                <span>توییتر</span>
              </div>

              <div className="linkedin">
                <a className="center" href="/">
                  <BsLinkedin />
                </a>
                <span>لینکدین</span>
              </div>

              <div className="insta">
                <a className="center" href="/">
                  <BsInstagram />
                </a>
                <span>اینستاگرام</span>
              </div>
            </div>

            <div className="line"></div>

            <div className="search_menu">
              <form>
                <input type="text" placeholder="جست‌وجو..." />
                <BsSearch />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
