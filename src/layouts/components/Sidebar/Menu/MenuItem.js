import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { useState } from "react";

import classNames from "classnames/bind";
import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);

function MenuItem({ title, to, icon, activeIcon }) {
  const [activeIcont, setActiveIcon] = useState(false);

  return (
    <NavLink
      onClick={(nav) => setActiveIcon(nav.isActive)}
      className={(nav) => cx("menu-item", { active: nav.isActive })}
      to={to}
    >
      <span className={cx("icon")}>{icon}</span>
      <span className={cx("active-icon")}>{activeIcon}</span>
      <span className={cx("title")}>{title}</span>
    </NavLink>
  );
}

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  activeIcon: PropTypes.node.isRequired,
};

export default MenuItem;
