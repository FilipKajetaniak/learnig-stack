import React, { FC } from "react";

import { Dropdown } from "components/Dropdown/Dropdown";

export const NoteDropdown: FC = () => {
  const options = [
    {
      key: "c",
      value: "C"
    },
    {
      key: "cs",
      value: "C#"
    },
    {
      key: "d",
      value: "D"
    },
    {
      key: "ds",
      value: "D#"
    },
    {
      key: "e",
      value: "E"
    },
    {
      key: "f",
      value: "F"
    },
    {
      key: "fs",
      value: "F#"
    },
    {
      key: "g",
      value: "G"
    },
    {
      key: "gs",
      value: "G#"
    },
    {
      key: "a",
      value: "A"
    },
    {
      key: "as",
      value: "A#"
    },
    {
      key: "b",
      value: "B"
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
