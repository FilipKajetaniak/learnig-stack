import React, { FC } from "react";
import { Menu } from "antd";

import { ScaleDropdown } from "components/ScaleDropdown/ScaleDropdown";
import { NoteDropdown } from "components/NoteDropdown/NoteDropdown";
import { OctaveDropdown } from "components/OctaveDropdown/OctaveDropdown";

import style from "./TopBar.module.scss";

export const TopBar: FC = () => {
  return (
    <Menu mode="horizontal" className={style.menu} selectable={false}>
      <Menu.Item key="harpia" className={style.menuItem}>
        <span className={style.logo}>Harpia</span>
      </Menu.Item>
      <Menu.Item key="note" className={style.menuItem}>
        <NoteDropdown />
      </Menu.Item>
      <Menu.Item key="scale" className={style.menuItem}>
        <ScaleDropdown />
      </Menu.Item>
      <Menu.Item key="octave" className={style.menuItem}>
        <OctaveDropdown />
      </Menu.Item>
    </Menu>
  );
};
