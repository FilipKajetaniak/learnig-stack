import React, { FC, useState, MouseEvent } from "react";

import style from "./Dropdown.module.scss";

const options: string[] = ["1", "2", "3", "4", "5", "6"];

export const Dropdown: FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedOption, setSelectedOption] = useState("3");
  const selectOption = (event: MouseEvent<HTMLLIElement>) => {
    const value = event.currentTarget.dataset.value;
    if (!value) {
      return;
    }
    setSelectedOption(value);
    setIsOpen(false);
  };
  const toggleDropdownVisibility = () => setIsOpen(!isOpen);
  return (
    <div className={style.wrapper}>
      <button className={style.button} onClick={toggleDropdownVisibility}>
        {selectedOption}
      </button>
      {isOpen && (
        <ul className={style.list}>
          {options
            .filter(option => option !== selectedOption)
            .map(option => (
              <li
                data-value={option}
                key={option}
                onClick={selectOption}
                className={style.listItem}
              >
                {option}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};
