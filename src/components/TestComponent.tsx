import React, { FC } from "react";

import style from "./TestComponent.module.scss";

export const TestComponent: FC = () => (
  <h1 className={style.hello}>Hello world!</h1>
);
