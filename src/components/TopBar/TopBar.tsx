import React, { FC } from "react";

import { RootNoteDropdown } from "components/RootNoteDropdown/RootNoteDropdown";

import style from "./TopBar.module.scss";

export const TopBar: FC = () => (
  <nav className={style.topBar}>
    <span className={style.header}>Harpia</span>
    {/* <RootNoteDropdown /> */}
  </nav>
);
