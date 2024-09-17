"use client";

import React from "react";

export type SelectFilterProps = {
  name: string;
  value: number;
  max: number;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const SelectFilter: React.FC<SelectFilterProps> = ({
  name,
  value,
  max,
  onChange,
}) => {
  const options = Array.from({ length: max + 1 }, (_, i) => i).map((num) => (
    <option key={num} value={num}>
      {num || `${name}`}
    </option>
  ));

  return (
    <select name={name} value={value} onChange={onChange}>
      {options}
    </select>
  );
};

export default SelectFilter;
