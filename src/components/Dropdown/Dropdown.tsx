import React, { FC, ReactNode } from "react";

import { Dropdown as AntDropdown, Menu } from "antd";
import { ClickParam } from "antd/lib/menu";

interface Option {
  key: string;
  value: string | ReactNode;
}

interface DropdownProps {
  options: Option[];
  selectedValue: Option;
  onSelect: (key: string) => void;
}

export const Dropdown: FC<DropdownProps> = ({
  options,
  onSelect,
  selectedValue
}) => {
  const handleClick = (event: ClickParam) => {
    onSelect(event.key);
  };
  const dropdownOptions = (
    <Menu>
      {options.map(({ key, value }) => (
        <Menu.Item key={key} onClick={handleClick}>
          {value}
        </Menu.Item>
      ))}
    </Menu>
  );
  return (
    <AntDropdown
      placement="bottomCenter"
      overlay={dropdownOptions}
      trigger={["click"]}
    >
      <span>{selectedValue.value}</span>
    </AntDropdown>
  );
};
