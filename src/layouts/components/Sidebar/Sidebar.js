import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import Menu, { MenuItem } from "./Menu";
import config from "~/config";
import { HomeIcon, UserIcon, LiveIcon, HomeActiveIcon, UserActiveIcon, LiveActiveIcon } from "~/components/Icon";
import SuggestedAccounts from "~/components/SuggestedAccounts";

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <aside className={cx("wrapper")}>
      <Menu>
        <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
        <MenuItem title="Following" to={config.routes.following} icon={<UserIcon />} activeIcon={<UserActiveIcon />} />
        <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
      </Menu>
      <SuggestedAccounts label="Suggested accounts"></SuggestedAccounts>
      <SuggestedAccounts label="Following accounts"></SuggestedAccounts>
    </aside>
  );
}

export default Sidebar;
