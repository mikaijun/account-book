import React from "react";

type Props = {
  name: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
};

export const SelectBox: React.FC<Props> = ({ onChange, name }: Props) => {
  return (
    <select name={name} onChange={onChange}>
      <option value="plus">収入</option>
      <option value="minus">支出</option>
    </select>
  );
};
