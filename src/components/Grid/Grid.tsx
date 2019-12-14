import React, { FC } from "react";

import { SideMenu } from "components/SideMenu/SideMenu";

import style from "./Grid.module.scss";

export const Grid: FC = () => (
  <main className={style.container}>
    <SideMenu />
  </main>
);
