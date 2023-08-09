import React, { useState } from "react";
import s from "./Header.module.scss";
import Image from "next/image";
import logo from "../../public/logo.svg";

import Entrance from "../Entrance/Entrance";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className={`${s.header} bg-second`}>
        <div className="container">
          <div
            className={`${s.header__content} flex items-center justify-between`}
          >
            <div className="w-9/12">
              <Image width={108} height={20} src={logo} alt="logo"></Image>
            </div>
            <button className="w-1/12 flex items-center me-16">
              <span
                className={`${s.header__dot} block  rounded-full`}
              ></span>
              <span className="text-fifth font-plus text-base font-bold">
                Поддержка
              </span>
            </button>
            <button
              className={`${s.header__price} w-1/12 rounded-lg whitespace-nowrap text-fifth font-plus text-lg text-base font-bold  py-3  me-4`}
            >
              ₽, RUB
            </button>
            <button
              className={`${s.header__athorization} w-1/12 rounded-lg text-fifth font-plus text-lg text-base font-bold  py-3`}
              onClick={() => setIsModalOpen(true)}
            >
              Войти
            </button>
          </div>
        </div>
      </header>
      <Entrance isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
};

export default Header;
