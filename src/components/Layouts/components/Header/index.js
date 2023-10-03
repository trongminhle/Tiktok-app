import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faCircleXmark,
   faSpinner,
   faMagnifyingGlass,
   faEllipsisVertical,
   faEarthAsia,
   faCircleQuestion,
   faKeyboard,
   faLanguage,
   faCloudUpload,
   faCoins,
   faGear,
   faUser,
   faSignOut,
} from "@fortawesome/free-solid-svg-icons";

import HeadlessTippy from "@tippyjs/react/headless";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import Button from "~/components/Button";
import styles from "./Header.module.scss";
import images from "~/assets/images";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountItem from "~/components/AccountItem";
import Menu from "~/components/Popper/Menu";

const cx = classNames.bind(styles);

const MENU_ITEMS = [
   {
      icon: <FontAwesomeIcon icon={faEarthAsia} />,
      title: "Endglish",
      children: {
         title: "Language",
         data: [
            {
               type: faLanguage,
               code: "en",
               title: "English",
            },
            {
               type: faLanguage,
               code: "vn",
               title: "VietName",
            },
         ],
      },
   },
   {
      icon: <FontAwesomeIcon icon={faCircleQuestion} />,
      title: "Feedback adn help",
      to: "/feedback",
   },
   {
      icon: <FontAwesomeIcon icon={faKeyboard} />,
      title: "Keyboard shortcuts",
   },
];

// Handle logic
const handleMenuChange = (menuItem) => {
   switch (menuItem.type) {
      case "language":
         break;
      default:
   }
};

const userMenu = [
   {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: "View file",
      to: "/@hoaa",
   },
   {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: "Get coins",
      to: "/coin",
   },
   {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: "Settings",
      to: "/Settings",
   },
   ...MENU_ITEMS,
   {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: "Log out",
      to: "/logout",
      separate: true,
   },
];

function Header() {
   const [searchResult, setSearchResult] = useState([]);
   const currentUser = true;

   useEffect(() => {
      setTimeout(() => {
         setSearchResult([]);
      }, 0);
   }, []);

   return (
      <header className={cx("wrapper")}>
         <div className={cx("inner")}>
            <div className={cx("logo")}>
               <img src={images.logo} alt="Tiktok" />
            </div>
            <HeadlessTippy
               interactive
               visible={searchResult.length > 0}
               render={(attrs) => (
                  <div className={cx("search-result")} tabIndex="-1" {...attrs}>
                     <PopperWrapper>
                        <h4 className={cx("search-title")}>Accounts</h4>
                        <AccountItem></AccountItem>
                        <AccountItem></AccountItem>
                        <AccountItem></AccountItem>
                        <AccountItem></AccountItem>
                     </PopperWrapper>
                  </div>
               )}
            >
               <div className={cx("search")}>
                  <input placeholder="Search accounts and videos"></input>
                  <button className={cx("clear")}>
                     <FontAwesomeIcon icon={faCircleXmark} />
                  </button>
                  <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />

                  <button className={cx("search-btn")}>
                     <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </button>
               </div>
            </HeadlessTippy>

            <div className={cx("action")}>
               {currentUser ? (
                  <>
                     <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                        <button className={cx("action-btn")}>
                           <FontAwesomeIcon icon={faCloudUpload} />
                        </button>
                     </Tippy>
                  </>
               ) : (
                  <>
                     <Button text>Upload</Button>
                     <Button primary>Log in</Button>
                  </>
               )}
               <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                  {currentUser ? (
                     <img
                        src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/28fe767f539ae7aaaf53561f754dec48~c5_100x100.jpeg?x-expires=1696489200&x-signature=SVn1qHQxdMVLFNtwbFjOGwcn0Hg%3D"
                        className={cx("user-avatar")}
                        alt=""
                     />
                  ) : (
                     <button className={cx("more-btn")}>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                     </button>
                  )}
               </Menu>
            </div>
         </div>
      </header>
   );
}

export default Header;
