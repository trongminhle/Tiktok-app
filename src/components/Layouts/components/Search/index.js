import { useState, useEffect, useRef } from "react";
import AccountItem from "~/components/AccountItem";
import HeadlessTippy from "@tippyjs/react/headless";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import { faCircleXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { SearchIcon } from "~/components/Icon";
import classNames from "classnames/bind";
import styles from "./Search.module.scss";

const cx = classNames.bind(styles);

function Search() {
   const [searchResult, setSearchResult] = useState([]);
   const [searchValue, setSearchValue] = useState("");
   const [showResults, setShowResults] = useState(true);

   const inputRef = useRef();

   useEffect(() => {
      setTimeout(() => {
         setSearchResult([1, 2, 3]);
      }, 0);
   }, []);

   const handleHideResult = () => {
      setShowResults(false);
   };

   return (
      <HeadlessTippy
         interactive
         visible={showResults && searchResult.length > 0}
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
         onClickOutside={handleHideResult}
      >
         <div className={cx("search")}>
            <input
               ref={inputRef}
               value={searchValue}
               placeholder="Search accounts and videos"
               spellCheck={false}
               onChange={(e) => setSearchValue(e.target.value)}
               onFocus={() => setShowResults(true)}
            ></input>
            {!!searchValue && (
               <button
                  className={cx("clear")}
                  onClick={() => {
                     setSearchValue("");
                     inputRef.current.focus();
                  }}
               >
                  <FontAwesomeIcon icon={faCircleXmark} />
               </button>
            )}

            {/* <FontAwesomeIcon className={cx("loading")} icon={faSpinner} /> */}

            <button className={cx("search-btn")}>
               <SearchIcon />
            </button>
         </div>
      </HeadlessTippy>
   );
}

export default Search;
