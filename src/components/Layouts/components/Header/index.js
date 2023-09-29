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
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";

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

function Header() {
   const [searchResult, setSearchResult] = useState([]);

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
            <Tippy
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
            </Tippy>
            <div className={cx("action")}>
               <Button text>Upload</Button>
               <Button primary>Log in</Button>

               <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
                  <button className={cx("more-btn")}>
                     <FontAwesomeIcon icon={faEllipsisVertical} />
                  </button>
               </Menu>
            </div>
         </div>
      </header>
   );
}

export default Header;
