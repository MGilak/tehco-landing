import React, { useEffect, useRef, useState } from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset, faL, faPlus } from "@fortawesome/free-solid-svg-icons";
import { IoIosClose } from "react-icons/io";
import {
  FaAngleDoubleDown,
  FaAngleDoubleUp,
  FaAngleDoubleLeft,
  FaBars,
  FaAngleDown,
} from "react-icons/fa";
import {
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsSearch,
  BsThreeDots,
} from "react-icons/bs";

const Header = () => {
  const [menuSticky, setMenuSticky] = useState(false);
  const [navPosition, setNavPosition] = useState();
  const [openSub1, setOpenSub1] = useState(true);
  const [openSub, setOpenSub] = useState({
    sub1: true,
    sub2: true,
    sub2_1: true,
    sub2_2: true,
    sub3: true,
    sub3_1: true,
    sub3_2: true,
    sub4: true,
  });
  const [showMenu, setShowMenu] = useState(false);

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

  // const openSubMenu = () => {
  //   setOpenSub(!openSub);
  // };

  const showSideMenu = () => {
    setShowMenu(true);
    console.log(showMenu);
  };

  // close sidebar on click outside
  const sidebarRef = useRef(null);

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className={`shadow ${showMenu && "active"}`}></div>
      <div className="wide_header">
        <div className="header_logo">
          <a href="#">
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
            <div onClick={showSideMenu} className="humburger_icon">
              <FaBars />
            </div>
          </div>

          <div className="customer">
            <a href="#">
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
        <div onClick={() => setShowMenu(false)} className="close_icon">
          <IoIosClose />
        </div>
        <div ref={sidebarRef} className={`menu ${showMenu && "active"}`}>
          <nav ref={navRef}>
            <ul className="main_menu">
              <li>
                <a href="#">خانه</a>
              </li>

              {/********محصولات*******/}
              <li>
                <a href="#">
                  <span>محصولات</span>
                  <FaAngleDoubleDown className="first" />
                  <FaAngleDown className="second" />
                </a>
                {/*منوی محصولات*/}
                <ul class="sub_menu">
                  <li>
                    <a href="#">
                      <span>اتوماسیون مدارس</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>سیستم مدیریت محتوا و پرتال ساز پارسیسم</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>سامانه مدیریت جلسات و شفافیت آرا</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>سامانه مدیریت خدمات شهری</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>سیستم آرشیو الکترونیک</span>
                    </a>
                  </li>
                </ul>
              </li>
              {/********پایان محصولات*********/}

              {/********خدمات*********/}
              <li>
                <a href="#">
                  <span>خدمات</span>
                  <FaAngleDoubleDown className="first" />
                  <FaAngleDown className="second" />
                </a>
                {/*منوی خدمات*/}
                <ul class="sub_menu">
                  <li>
                    <a href="#">
                      <span>طراحی وبسایت</span>
                      <FaAngleDown className="second" />
                    </a>
                    <FaAngleDoubleLeft />
                    <ul class="sub_menu sub1_menu2">
                      <li>
                        <a href="#">
                          <span>پشتیبانی وب افزار</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>استارتاپ و کسب و کار</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>شخصی</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>فروشگاهی</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>سازمانی و اداری</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>شرکتی و خصوصی</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#" class="sf-with-ul">
                      <span>موبایل و اپلیکیشن</span>
                    </a>
                    <FaAngleDoubleLeft />
                    <ul class="sub_menu sub2_menu2">
                      <li>
                        <a href="#" data-title="راهکارهای اداری و سازمانی">
                          <span>راهکارهای اداری و سازمانی</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      <span>پنل پیامک</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>دیجیتال مارکتینگ</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>سامانه مدیریت کسب وکار</span>
                    </a>
                  </li>
                </ul>
              </li>
              {/********پایان خدمات*********/}

              {/********نمونه کار*********/}
              <li
                onClick={() => (prev) => setOpenSub({ ...prev, sub3: false })}
              >
                <a href="#">
                  <span>نمونه کار</span>
                  <FaAngleDoubleDown className="first" />
                  <FaAngleDown className="second" />
                </a>
                {/*منوی نمونه کار*/}
                <ul class="sub_menu">
                  <li>
                    <a href="#">
                      <span>وب سایت</span>
                    </a>
                    <FaAngleDoubleLeft />
                    <ul class="sub_menu sub1_menu2">
                      <li>
                        <a href="#">
                          <span>شخصی</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>فروشگاهی</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>سازمانی</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>خدماتی</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>شرکتی</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      <span>موبایل اپلیکیشن</span>
                    </a>
                    <FaAngleDoubleLeft />
                    <ul class="sub_menu sub2_menu2">
                      <li>
                        <a href="#">
                          <span>شخصی</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>سازمانی</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>استارتاپی</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>خدماتی</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>فروشگاهی</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      <span>گرافیک</span>
                    </a>
                  </li>
                </ul>
              </li>
              {/********پایان نمونه کار*********/}

              {/********پشتیبانی*********/}
              <li
                onClick={() => (prev) => setOpenSub({ ...prev, sub4: false })}
              >
                <a href="#">
                  <span>پشتیبانی</span>
                  <FaAngleDoubleDown className="first" />
                </a>
                {/*منوی نمونه کار*/}
                <ul class="sub_menu">
                  <li>
                    <a href="#">
                      <span>سامانه مشتریان</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span>پشتیبانی وب افزار</span>
                    </a>
                  </li>
                </ul>
              </li>
              {/********پایان پشتیبانی*******/}
              <li>
                <a href="#">وبلاگ</a>
              </li>
              <li>
                <a href="#">درباره ما</a>
              </li>
              <li>
                <a href="#">تماس با ما</a>
              </li>

              <li className="extra_menu">
                <a href="#">
                  <BsThreeDots />
                </a>
                {/********Extra Menu********/}
                <ul className=" sub_menu">
                  {/********خدمات*********/}
                  <li className="one">
                    <a href="#">
                      <span>خدمات</span>
                    </a>
                    <FaAngleDoubleUp />
                    {/*منوی خدمات*/}
                    <ul class="sub_menu sub1_menu2">
                      <li>
                        <a href="#">
                          <span>طراحی وبسایت</span>
                        </a>
                        <FaAngleDoubleLeft />
                        <ul class="sub_menu sub1_menu2">
                          <li>
                            <a href="#">
                              <span>پشتیبانی وب افزار</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span>استارتاپ و کسب و کار</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span>شخصی</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span>فروشگاهی</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span>سازمانی و اداری</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span>شرکتی و خصوصی</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#" class="sf-with-ul">
                          <span>موبایل و اپلیکیشن</span>
                        </a>
                        <FaAngleDoubleLeft />
                        <ul class="sub_menu sub2_menu2">
                          <li>
                            <a href="#" data-title="راهکارهای اداری و سازمانی">
                              <span>راهکارهای اداری و سازمانی</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">
                          <span>پنل پیامک</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>دیجیتال مارکتینگ</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>سامانه مدیریت کسب وکار</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  {/********پایان خدمات*********/}

                  {/********نمونه کار*********/}
                  <li className="two">
                    <a href="#">
                      <span>نمونه کار</span>
                    </a>
                    <FaAngleDoubleUp />
                    {/*منوی نمونه کار*/}
                    <ul class="sub_menu sub1_menu2">
                      <li>
                        <a href="#">
                          <span>وب سایت</span>
                        </a>
                        <FaAngleDoubleLeft />
                        <ul class="sub_menu sub1_menu2">
                          <li>
                            <a href="#">
                              <span>شخصی</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span>فروشگاهی</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span>سازمانی</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span>خدماتی</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span>شرکتی</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">
                          <span>موبایل اپلیکیشن</span>
                        </a>
                        <FaAngleDoubleLeft />
                        <ul class="sub_menu sub2_menu2">
                          <li>
                            <a href="#">
                              <span>شخصی</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span>سازمانی</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span>استارتاپی</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span>خدماتی</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span>فروشگاهی</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">
                          <span>گرافیک</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  {/********پایان نمونه کار*********/}

                  {/********پشتیبانی*********/}
                  <li className="three">
                    <a href="#">
                      <span>پشتیبانی</span>
                    </a>
                    <FaAngleDoubleUp />
                    {/*منوی نمونه کار*/}
                    <ul class="sub_menu sub1_menu2">
                      <li>
                        <a href="#">
                          <span>سامانه مشتریان</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>پشتیبانی وب افزار</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  {/********پایان پشتیبانی*******/}
                  <li className="four">
                    <a href="#">وبلاگ</a>
                  </li>
                  <li className="five">
                    <a href="#">درباره ما</a>
                  </li>
                  <li className="six">
                    <a href="#">تماس با ما</a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>

          <div className="menu_left">
            <div className="social_menu">
              <div className="aparat">
                <a className="center" href="#">
                  <BsTwitter />
                </a>
                <span>توییتر</span>
              </div>

              <div className="linkedin">
                <a className="center" href="#">
                  <BsLinkedin />
                </a>
                <span>لینکدین</span>
              </div>

              <div className="insta">
                <a className="center" href="#">
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
