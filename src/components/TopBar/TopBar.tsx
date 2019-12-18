import React, { FC } from "react";
import { Menu, Dropdown } from "antd";

import style from "./TopBar.module.scss";
import { ScaleDropdown } from "components/ScaleDropdown/ScaleDropdown";
import { NoteDropdown } from "components/NoteDropdown/NoteDropdown";

export const TopBar: FC = () => {
  return (
    <Menu mode="horizontal" className={style.menu}>
      <Menu.Item key="mail">
        <NoteDropdown />
      </Menu.Item>
    </Menu>
  );
};
