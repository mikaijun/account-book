import React from "react";

type Props = {
  name: string;
  value: string | number;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

export const Calendar: React.FC<Props> = ({ name, value, onChange }: Props) => {
  return <input type="date" value={value} name={name} onChange={onChange} />;
};
