import React, { FC } from "react";
import { Menu, Dropdown } from "antd";

import style from "./TopBar.module.scss";
import { ScaleDropdown } from "components/ScaleDropdown/ScaleDropdown";

export const TopBar: FC = () => {
  const menu = (
    <Menu className={style.optionsContainer}>
      <Menu.Item key="0">
        <a href="http://www.alipay.com/">1st menu item</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="http://www.taobao.com/">2nd menu item</a>
      </Menu.Item>
      <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
  );
  return (
    // <nav className={style.topBar}>
    //   <h1 className={style.header}>Harpia</h1>{" "}
    //   <ScaleDropdown className={style.dropdown} />
    // </nav>
    <Menu mode="horizontal" className={style.menu}>
      <Menu.Item key="mail">
        <Dropdown overlay={menu} trigger={["click"]}>
          <a className="ant-dropdown-link" href="#">
            Click me
          </a>
        </Dropdown>
      </Menu.Item>
    </Menu>
  );
};
