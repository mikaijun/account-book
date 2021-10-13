import React from "react";

type Props = {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export const Button: React.FC<Props> = ({ text, onClick }: Props) => {
  return <button onClick={onClick}>{text}</button>;
};
