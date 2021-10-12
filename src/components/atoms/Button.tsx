import React from "react";

type Props = {
  text: string;
};

export const Button: React.FC<Props> = ({ text }: Props) => {
  return <button>{text}</button>;
};
