import React from "react";

import Image from "next/image";
import Sydney from "../../assets/Sydney.png";

import Warning from "@/components/Warning/Warning";

const Direction = () => {
  return (
    <main>
      <div className="container pt-5">
        <Warning />

        <h2>Популярные направления</h2>

        <div>
          <div>
            <Image src={Sydney} alt="sydney" />

            <div>
              <p>Сидней</p>
              <p>от 23509₽</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Direction;
