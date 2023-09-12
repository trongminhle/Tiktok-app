import classNames from "classnames/bind";
import styles from "./Accountitem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountItem() {
   return (
      <div className={cx("wrapper")}>
         <img
            className={cx("avatar")}
            src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/a9a9db81a943517ed31d84079ff669f2.jpeg?x-expires=1694595600&x-signature=jtLjDyEu0d%2BLNdK1yD1K2X%2Fowl4%3D"
            alt
         />
         <div className={cx("info")}>
            <h4 className={cx("name")}>
               <span>Nguyen Van A</span>
               <FontAwesomeIcon className={cx("check")} icon={faCheckCircle}></FontAwesomeIcon>
            </h4>
            <span className={cx("username")}>nguyenvana</span>
         </div>
      </div>
   );
}

export default AccountItem;
