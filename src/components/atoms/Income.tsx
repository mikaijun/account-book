import React from "react";

type Props = {
  context: string;
  price: number;
};

export const Income: React.FC<Props> = ({ context, price }: Props) => {
  return (
    <div className="list">
      <p>{context}</p>
      <p>+{price}</p>
    </div>
  );
};
