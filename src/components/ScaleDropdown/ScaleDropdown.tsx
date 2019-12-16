import React, { FC, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

import style from "./ScaleDropdown.module.scss";
import scales from "constants/scales";
import { changeScale } from "store/scale/actionCreators";

interface ScaleDropdownProps {
  className: string;
}

export const ScaleDropdown: FC<ScaleDropdownProps> = ({ className }) => {
  const dispatch = useDispatch();
  const selectedScale = useSelector((state: any) => state.scale.scale);
  const selectScale = (event: ChangeEvent<HTMLSelectElement>) =>
    dispatch(changeScale(event.target.value.toString()));

  return (
    <select
      name="Scale"
      className={className}
      onChange={selectScale}
      value={selectedScale}
    >
      {Object.keys(scales).map(scale => (
        <option key={scale} value={scale}>
          {scale}
        </option>
      ))}
    </select>
  );
};
