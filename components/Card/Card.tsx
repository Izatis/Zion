import React, { FC } from "react";

import Image from "next/image";

interface ICardPorps {
  item: any;
}

const Card: FC<ICardPorps> = ({ item }) => {
  return (
    <div className="w-1/4">
      <div>
        <Image src={item.img} alt="card image" />
      </div>

      <div className="flex flex-col mt-3">
        <p className="text-black text-2xl font-semibold">{item.title}</p>
        <p className="text-gray text-base font-normal tracking-wider">
          от {item.price}₽
        </p>
      </div>
    </div>
  );
};

export default Card;
