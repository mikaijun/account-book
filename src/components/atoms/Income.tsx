import React from "react";

type Props = {
  item: string;
  price: number;
};

export const Income: React.FC<Props> = ({ item, price }: Props) => {
  return (
    <div className="list">
      <p>{item}</p>
      <p>+{price}</p>
    </div>
  );
};
