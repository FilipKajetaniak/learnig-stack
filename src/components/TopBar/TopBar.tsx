import React, { FC } from "react";

import style from "./TopBar.module.scss";
import { ScaleDropdown } from "components/ScaleDropdown/ScaleDropdown";

export const TopBar: FC = () => {
  return (
    <nav className={style.topBar}>
      <h1 className={style.header}>Harpia</h1>{" "}
      <ScaleDropdown className={style.dropdown} />
    </nav>
  );
};
