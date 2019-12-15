import React, { FC } from "react";

import { RootNoteDropdown } from "components/RootNoteDropdown/RootNoteDropdown";
import { ScaleDropdown } from "components/ScaleDropdown/ScaleDropdown";
import { OctaveDropdown } from "components/OctaveDropdown/OctaveDropdown";

import style from "./TopBar.module.scss";

export const TopBar: FC = () => (
  <nav className={style.topBar}>
    <span className={style.header}>Harpia</span>
    <div className={style.buttonsWrapper}>
      <RootNoteDropdown />
      <ScaleDropdown />
      <OctaveDropdown />
    </div>
  </nav>
);
