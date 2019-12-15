import React, { FC } from "react";

import { SideMenu } from "components/SideMenu/SideMenu";

import style from "./Grid.module.scss";
import { Dropdown } from "components/Dropdown/Dropdown";
import { Column } from "components/Column/Column";

export const Grid: FC = () => (
  <main className={style.container}>
    {/* <Dropdown /> */}
    <Column />
    <SideMenu />
  </main>
);
