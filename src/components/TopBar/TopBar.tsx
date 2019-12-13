import React, { FC } from "react";

import style from "./TopBar.module.scss";

export const TopBar: FC = () => (
  <nav className={style.topBar}>
    <span className={style.header}>Navbar</span>
    <button className={style.button}>Click</button>
  </nav>
);
