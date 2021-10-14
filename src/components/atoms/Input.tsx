import React from "react";

type Props = {
  name: string;
  value: string | number;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

export const Input: React.FC<Props> = ({ name, value, onChange }: Props) => {
  return <input type="text" value={value} name={name} onChange={onChange} />;
};
