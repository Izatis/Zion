import React from "react";
import s from "./Header.module.scss";
import Image from "next/image";
import logo from "../../public/logo.svg";

const Header = () => {
  return (
    <header className={`${s.header} w-full fixed top-0`}>
      <div className={s.container}>
        <div
          className={`${s.header__content} flex items-center justify-between`}
        >
          <div className="w-9/12">
            <Image width={108} height={20} src={logo} alt="logo"></Image>
          </div>
          <button
            className={`${s.header__support} w-1/12 flex items-center space-x-2`}
          >
            <span
              className={`${s.header__dot} block w-3 h-3 rounded-full`}
            ></span>
            <span className="text-base font-bold">Поддержка</span>
          </button>
          <button
            className={`${s.header__price} w-1/12 rounded-lg text-lg text-base font-bold py-3`}
          >
            ₽, RUB
          </button>
          <button
            className={`${s.header__athorization} w-1/12 rounded-lg text-lg text-base font-bold py-3`}
          >
            Войти
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
