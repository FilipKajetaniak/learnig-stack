import React, { FC, ButtonHTMLAttributes } from "react";

import style from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const Button: FC<ButtonProps> = ({
  children,
  className = "",
  ...rest
}) => (
  <button className={`${style.button} ${className}`} {...rest}>
    {children}
  </button>
);
