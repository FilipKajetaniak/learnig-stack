import React, { FC } from "react";

import { Dropdown } from "components/Dropdown/Dropdown";

export const OctaveDropdown: FC = () => {
  const options = [
    {
      key: "1",
      value: "1"
    },
    {
      key: "2",
      value: "2"
    },
    {
      key: "3",
      value: "3"
    },
    {
      key: "4",
      value: "4"
    },
    {
      key: "5",
      value: "5"
    },
    {
      key: "6",
      value: "6"
    }
  ];

  const onSelect = (key: string) => {
    console.log(key);
  };

  return (
    <Dropdown
      options={options}
      selectedValue={options[2]}
      onSelect={onSelect}
    />
  );
};
