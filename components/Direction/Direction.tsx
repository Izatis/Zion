import s from "./Direction.module.scss";

import Warning from "@/components/Warning/Warning";
import Image from "next/image";
import Sydney from "../../assets/Sydney.png";

const Direction = () => {
  return (
    <main>
      <section className={`${s.hero} mb-16`}>
        <div className={s.container}>
          <h1 className="text-8xl font-extrabold">
            Путешествуй <br /> без ограничений
          </h1>
          <div className={`${s.tabs} rounded-2xl`}></div>
        </div>
      </section>

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
