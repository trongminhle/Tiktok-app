import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./SuggestedAccounts.module.scss";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx("account-item")}>
      <img
        className={cx("avtar")}
        src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/0d3621d69bba7a2d7448c71fcfc9b95b.jpeg?x-expires=1700294400&x-signature=OL7guC3OKupW4THde44o8UbWifo%3D"
        alt="trangmeo"
      />
      <div className={cx("item-info")}>
        <p className={cx("nickname")}>
          <strong>trangmeo</strong>
          <FontAwesomeIcon className={cx("check")} icon={faCheckCircle}></FontAwesomeIcon>
        </p>
        <p className={cx("name")}>Trang meo</p>
      </div>
    </div>
  );
}

export default AccountItem;
