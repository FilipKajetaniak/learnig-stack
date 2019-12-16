import React, { FC, useState, MouseEvent } from "react";

import { Column } from "components/Column/Column";

import style from "./Grid.module.scss";

interface Column {
  id: string;
}

export const Grid: FC = () => {
  const [columns, setColumns] = useState<Column[]>([{ id: "temp" }]);
  const addColumn = (event: MouseEvent<HTMLDivElement>) => {
    setColumns([...columns, { id: String(new Date().getTime()) }]);
  };
  return (
    <main className={style.grid}>
      {columns.map(column => (
        <Column key={column.id} />
      ))}
      <div className={style.addColumn} onClick={addColumn}>
        <div className={style.addButton}>+</div>
      </div>
    </main>
  );
};
