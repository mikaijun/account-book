import React from "react";

type Props = {
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

export const Input: React.FC<Props> = ({ name, onChange }: Props) => {
  return <input type="text" name={name} onChange={onChange} />;
};
