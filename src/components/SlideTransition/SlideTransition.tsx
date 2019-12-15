import React, { FC, useEffect, useRef, useState } from "react";

import style from "./SlideTransition.module.scss";

interface SlideTransitionProps {
  duration: number;
}

export const SlideTransition: FC<SlideTransitionProps> = ({
  children,
  duration
}) => {
  const initialStyles = {
    opacity: 0
  };
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [styles, setStyles] = useState<any>(initialStyles);

  useEffect(() => {
    if (wrapperRef.current && wrapperRef.current.clientHeight) {
      setStyles({
        ...initialStyles,
        transform: `translateY(-${wrapperRef.current.clientHeight}px)`
      });
      setTimeout(() => {
        setStyles({
          ...initialStyles,
          opacity: 1,
          transform: `translateY(0)`,
          transition: `all ${duration}ms ease-out`
        });
      }, duration);
    }
  }, []);

  return (
    <div className={style.wrapper}>
      <div ref={wrapperRef} style={styles} className={style.content}>
        {children}
      </div>
    </div>
  );
};
