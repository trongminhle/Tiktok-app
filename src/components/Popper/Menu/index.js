import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import Styles from "./Menu.module.scss";
import MenuItem from "./Menuitem";

const cx = classNames.bind(Styles);

function Menu({ children, items = [] }) {
   const renderItems = () => {
      return items.map((item, index) => <MenuItem key={index} data={item} />);
   };
   return (
      <Tippy
         delay={[0, 700]}
         interactive
         placement="bottom-end"
         render={(attrs) => (
            <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
               <PopperWrapper className={cx("menu-popper")}>{renderItems()}</PopperWrapper>
            </div>
         )}
      >
         {children}
      </Tippy>
   );
}

export default Menu;
