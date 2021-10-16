import React from "react";

type Props = {
  context: string;
  price: number;
  date: string;
};

export const Income: React.FC<Props> = ({ context, price, date }: Props) => {
  return (
    <div className="list">
      <p>{date}</p>
      <p>{context}</p>
      <p>+{price}</p>
    </div>
  );
};
