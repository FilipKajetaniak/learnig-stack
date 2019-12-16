import React, { FC } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Dropdown } from "components/Dropdown/Dropdown";
import { OCTAVES } from "constants/octaves";
import { changeOctave } from "store/scale/actionCreators";

export const OctaveDropdown: FC = () => {
  const selectedOctave = useSelector((state: any) => state.scale.octave);
  const octaveOptions = OCTAVES.map(octave => octave.toString());
  const dispatch = useDispatch();
  const setOctave = (octave: string) => {
    dispatch(changeOctave(4));
  };

  return (
    <Dropdown
      options={octaveOptions}
      selectedOption={selectedOctave.toString()}
      onChange={setOctave}
    />
  );
};
