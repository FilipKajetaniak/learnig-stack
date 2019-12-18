import React, { FC } from "react";

import { Dropdown } from "components/Dropdown/Dropdown";

export const ScaleDropdown: FC = () => {
  const options = [
    {
      key: "major",
      value: "Major"
    },
    {
      key: "minor",
      value: "Minor"
    }
  ];

  const onSelect = (key: string) => {
    console.log(key);
  };

  return (
    <Dropdown
      options={options}
      selectedValue={options[0]}
      onSelect={onSelect}
    />
  );
};
