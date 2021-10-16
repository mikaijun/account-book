import React from "react";

type Props = {
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

export const Calendar: React.FC<Props> = ({ name, onChange, value }: Props) => {
  return <input type="date" value={value} name={name} onChange={onChange} />;
};
