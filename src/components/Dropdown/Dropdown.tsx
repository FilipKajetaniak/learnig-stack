import React, { FC, useState, MouseEvent } from "react";

import style from "./Dropdown.module.scss";
import { SlideTransition } from "components/SlideTransition/SlideTransition";

interface DropdownProps {
  options: string[];
  onChange: (value: string) => void;
  selectedOption: string;
}

export const Dropdown: FC<DropdownProps> = ({
  options,
  selectedOption,
  onChange
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectOption = (event: MouseEvent<HTMLLIElement>) => {
    const value = event.currentTarget.dataset.value;
    if (!value) {
      return;
    }
    onChange(value);
    setIsOpen(false);
  };
  const toggleDropdownVisibility = () => setIsOpen(!isOpen);
  return (
    <div className={style.wrapper}>
      <button className={style.button} onClick={toggleDropdownVisibility}>
        {selectedOption}
      </button>
      {isOpen && (
        // <SlideTransition duration={100}>
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
        // </SlideTransition>
      )}
    </div>
  );
};
