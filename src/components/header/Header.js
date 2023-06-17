import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FaAngleDoubleDown, FaAngleDoubleLeft } from "react-icons/fa";

const Header = () => {
  const [hover, setHover] = useState(false);
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

      <div className="menu_header center">
        <div className="menu">
          <nav>
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
              <li className="services">
                <a href="/">
                  <span>خدمات</span>
                  <FaAngleDoubleDown />
                </a>
                {/*منوی خدمات*/}
                <ul class="sub_menu">
                  <li
                    onMouseOver={() => setHover(true)}
                    onMouseOut={() => setHover(false)}
                  >
                    <a href="/">
                      <span>طراحی وبسایت</span>
                      <FaAngleDoubleLeft />
                    </a>
                    <ul class={`sub_menu sub_menu2 ${hover && "active"}`}>
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
                      <FaAngleDoubleLeft />
                    </a>
                    {/* <ul class="sub2_menu2">
                      <li>
                        <a href="/" data-title="راهکارهای اداری و سازمانی">
                          <span>راهکارهای اداری و سازمانی</span>
                        </a>
                      </li>
                    </ul> */}
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
              </li>
              {/********پایان نمونه کار*********/}

              {/********پشتیبانی*********/}
              <li>
                <a href="/">
                  <span>پشتیبانی</span>
                  <FaAngleDoubleDown />
                </a>
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
            <div className="social_menu"></div>

            <div className="search_menu"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;