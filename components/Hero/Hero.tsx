import React from "react";

import s from "./Hero.module.scss";

import Link from "next/link";
import Image from "next/image";
import { DatePicker } from "antd";
import { Select } from "antd";
import arrow from "../../assets/arrow.svg";

const Hero = () => {
  return (
    <section className={`${s.hero} relative`}>
      <div className={s.container}>
        <h1 className="text-8xl font-extrabold">
          Путешествуй <br /> без ограничений
        </h1>
        <div
          className={`${s.tabs} container absolute left-0 right-0 rounded-2xl px-14`}
        >
          <ul className="flex">
            <li>
              <Link href="#" className="flex items-center space-x-2 px-8 h-20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M21 21.3252L15 15.3252M3 10.3252C3 11.2444 3.18106 12.1547 3.53284 13.004C3.88463 13.8533 4.40024 14.6249 5.05025 15.2749C5.70026 15.925 6.47194 16.4406 7.32122 16.7924C8.1705 17.1441 9.08075 17.3252 10 17.3252C10.9193 17.3252 11.8295 17.1441 12.6788 16.7924C13.5281 16.4406 14.2997 15.925 14.9497 15.2749C15.5998 14.6249 16.1154 13.8533 16.4672 13.004C16.8189 12.1547 17 11.2444 17 10.3252C17 9.40594 16.8189 8.49569 16.4672 7.64641C16.1154 6.79713 15.5998 6.02546 14.9497 5.37545C14.2997 4.72544 13.5281 4.20982 12.6788 3.85804C11.8295 3.50626 10.9193 3.3252 10 3.3252C9.08075 3.3252 8.1705 3.50626 7.32122 3.85804C6.47194 4.20982 5.70026 4.72544 5.05025 5.37545C4.40024 6.02546 3.88463 6.79713 3.53284 7.64641C3.18106 8.49569 3 9.40594 3 10.3252Z"
                    stroke="#C5C6CC"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span className="text-base font-medium">Поиск</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="flex items-center space-x-2 px-8 h-20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M14.5 6.5L17.5 3.6C17.8846 3.21544 18.4061 2.99939 18.95 2.99939C19.4939 2.99939 20.0154 3.21544 20.4 3.6C20.7846 3.98456 21.0006 4.50614 21.0006 5.05C21.0006 5.59385 20.7846 6.11544 20.4 6.5L17.5 9.5L20 17L17.5 19.55L14 13L11 16V19L9 21L7.5 16.5L3 15L5 13H8L11 10L4.5 6.5L7 4L14.5 6.5Z"
                    stroke="#C5C6CC"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span className="text-base font-medium">Авиабилеты</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="flex items-center space-x-2 px-8 h-20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M3 15H19C19.5304 15 20.0391 14.7893 20.4142 14.4142C20.7893 14.0391 21 13.5304 21 13C21 9.13 17.63 6 11 6H3V11H20.5M3 10V14M8 11V6M13 11V6.5M3 19H21"
                    stroke="#C5C6CC"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span className="text-base font-medium">ЖД-билеты</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="flex items-center space-x-2 px-8 h-20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M3 17.5V19.5M21 17.5V19.5M4 6C4 5.60218 4.15804 5.22064 4.43934 4.93934C4.72064 4.65804 5.10218 4.5 5.5 4.5H18.5C18.8978 4.5 19.2794 4.65804 19.5607 4.93934C19.842 5.22064 20 5.60218 20 6V11.5H4V6Z"
                    stroke="#C5C6CC"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10 9H7C6.60218 9 6.22064 9.15804 5.93934 9.43934C5.65804 9.72064 5.5 10.1022 5.5 10.5V11.5H11.5V10.5C11.5 10.1022 11.342 9.72064 11.0607 9.43934C10.7794 9.15804 10.3978 9 10 9ZM17 9H14C13.6022 9 13.2206 9.15804 12.9393 9.43934C12.658 9.72064 12.5 10.1022 12.5 10.5V11.5H18.5V10.5C18.5 10.1022 18.342 9.72064 18.0607 9.43934C17.7794 9.15804 17.3978 9 17 9ZM2 13C2 12.6022 2.15804 12.2206 2.43934 11.9393C2.72064 11.658 3.10218 11.5 3.5 11.5H20.5C20.8978 11.5 21.2794 11.658 21.5607 11.9393C21.842 12.2206 22 12.6022 22 13V17.5H2V13Z"
                    stroke="#C5C6CC"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span className="text-base font-medium">Отели</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="flex items-center space-x-2 px-8 h-20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M17.553 16.75C16.1465 15.3437 14.239 14.5536 12.25 14.5536C10.261 14.5536 8.3535 15.3437 6.94701 16.75M18 3.80402C16.6219 3.0084 14.9842 2.7928 13.4472 3.20462C11.9102 3.61645 10.5997 4.62198 9.804 6.00002L20.196 12C20.9916 10.6219 21.2072 8.98426 20.7954 7.44723C20.3836 5.91019 19.378 4.59969 18 3.80402ZM18 3.80402C18.957 4.35602 18.39 7.13002 16.732 10M18 3.80402C17.043 3.25202 14.925 5.13002 13.268 8.00002M15 9.00002L12 14.196M3 19.25C3.31129 19.0952 3.65249 19.0099 4 19C4.3895 18.9919 4.77512 19.0786 5.12358 19.2529C5.47203 19.4271 5.77283 19.6835 6 20C6.22717 20.3165 6.52797 20.5729 6.87642 20.7472C7.22488 20.9214 7.6105 21.0082 8 21C8.3895 21.0082 8.77512 20.9214 9.12358 20.7472C9.47203 20.5729 9.77283 20.3165 10 20C10.2272 19.6835 10.528 19.4271 10.8764 19.2529C11.2249 19.0786 11.6105 18.9919 12 19C12.3895 18.9919 12.7751 19.0786 13.1236 19.2529C13.472 19.4271 13.7728 19.6835 14 20C14.2272 20.3165 14.528 20.5729 14.8764 20.7472C15.2249 20.9214 15.6105 21.0082 16 21C16.3895 21.0082 16.7751 20.9214 17.1236 20.7472C17.472 20.5729 17.7728 20.3165 18 20C18.2272 19.6835 18.528 19.4271 18.8764 19.2529C19.2249 19.0786 19.6105 18.9919 20 19C20.3475 19.0099 20.6887 19.0952 21 19.25"
                    stroke="#C5C6CC"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span className="text-base font-medium">Туры</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="flex items-center space-x-2 px-8 h-20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M5 17C5 17.5304 5.21071 18.0391 5.58579 18.4142C5.96086 18.7893 6.46957 19 7 19C7.53043 19 8.03914 18.7893 8.41421 18.4142C8.78929 18.0391 9 17.5304 9 17M5 17C5 16.4696 5.21071 15.9609 5.58579 15.5858C5.96086 15.2107 6.46957 15 7 15C7.53043 15 8.03914 15.2107 8.41421 15.5858C8.78929 15.9609 9 16.4696 9 17M5 17H3V11M9 17H15M15 17C15 17.5304 15.2107 18.0391 15.5858 18.4142C15.9609 18.7893 16.4696 19 17 19C17.5304 19 18.0391 18.7893 18.4142 18.4142C18.7893 18.0391 19 17.5304 19 17M15 17C15 16.4696 15.2107 15.9609 15.5858 15.5858C15.9609 15.2107 16.4696 15 17 15C17.5304 15 18.0391 15.2107 18.4142 15.5858C18.7893 15.9609 19 16.4696 19 17M19 17H21V13C21 12.4696 20.7893 11.9609 20.4142 11.5858C20.0391 11.2107 19.5304 11 19 11H18M3 11L5 6H14L18 11M3 11H18M12 11V6"
                    stroke="#C5C6CC"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span className="text-base font-medium">Аренда авто</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="flex items-center space-x-2 px-8 h-20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M2 20C2.22717 20.3165 2.52797 20.5729 2.87642 20.7472C3.22488 20.9214 3.6105 21.0082 4 21C4.3895 21.0082 4.77512 20.9214 5.12358 20.7472C5.47203 20.5729 5.77283 20.3165 6 20C6.22717 19.6835 6.52797 19.4271 6.87642 19.2528C7.22488 19.0786 7.6105 18.9918 8 19C8.3895 18.9918 8.77512 19.0786 9.12358 19.2528C9.47203 19.4271 9.77283 19.6835 10 20C10.2272 20.3165 10.528 20.5729 10.8764 20.7472C11.2249 20.9214 11.6105 21.0082 12 21C12.3895 21.0082 12.7751 20.9214 13.1236 20.7472C13.472 20.5729 13.7728 20.3165 14 20C14.2272 19.6835 14.528 19.4271 14.8764 19.2528C15.2249 19.0786 15.6105 18.9918 16 19C16.3895 18.9918 16.7751 19.0786 17.1236 19.2528C17.472 19.4271 17.7728 19.6835 18 20C18.2272 20.3165 18.528 20.5729 18.8764 20.7472C19.2249 20.9214 19.6105 21.0082 20 21C20.3895 21.0082 20.7751 20.9214 21.1236 20.7472C21.472 20.5729 21.7728 20.3165 22 20M4 18L3 15H21L20 18M8 7L6 12M11 12H18L11 3V12Z"
                    stroke="#C5C6CC"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span className="text-base font-medium">Аренда яхт</span>
              </Link>
            </li>
            <li>
              <Link href="#" className="flex items-center space-x-2 px-8 h-20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M2 20C2.22717 20.3165 2.52797 20.5729 2.87642 20.7472C3.22488 20.9214 3.6105 21.0082 4 21C4.3895 21.0082 4.77512 20.9214 5.12358 20.7472C5.47203 20.5729 5.77283 20.3165 6 20C6.22717 19.6835 6.52797 19.4271 6.87642 19.2528C7.22488 19.0786 7.6105 18.9918 8 19C8.3895 18.9918 8.77512 19.0786 9.12358 19.2528C9.47203 19.4271 9.77283 19.6835 10 20C10.2272 20.3165 10.528 20.5729 10.8764 20.7472C11.2249 20.9214 11.6105 21.0082 12 21C12.3895 21.0082 12.7751 20.9214 13.1236 20.7472C13.472 20.5729 13.7728 20.3165 14 20C14.2272 19.6835 14.528 19.4271 14.8764 19.2528C15.2249 19.0786 15.6105 18.9918 16 19C16.3895 18.9918 16.7751 19.0786 17.1236 19.2528C17.472 19.4271 17.7728 19.6835 18 20C18.2272 20.3165 18.528 20.5729 18.8764 20.7472C19.2249 20.9214 19.6105 21.0082 20 21C20.3895 21.0082 20.7751 20.9214 21.1236 20.7472C21.472 20.5729 21.7728 20.3165 22 20M4 18L3 13H21L19 17M5 13V7H13L17 13M7 7V3H6"
                    stroke="#C5C6CC"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span className="text-base font-medium">Круизы</span>
              </Link>
            </li>
          </ul>

          <ul className="flex justify-between py-8">
            <li className="w-full relative flex items-center border rounded-lg ps-6">
              <span className="text-base font-semibold">Откуда</span>
              <Image
                className="w-7 h-7 absolute cursor-pointer"
                src={arrow}
                alt="arrow"
              />
            </li>
            <li className="w-full flex items-center border rounded-lg ps-6">
              <span className="text-base font-semibold">Куда</span>
            </li>
            <li>
              <DatePicker
                style={{ width: 162, height: "100%" }}
                placeholder="Туда"
              />
            </li>
            <li>
              <DatePicker
                style={{ width: 162, height: "100%" }}
                placeholder="Обратно"
              />
            </li>
            <li>
              <Select
                defaultValue="1 пасс, эконом"
                style={{ width: 199, height: "100%" }}
                options={[
                  { value: "jack", label: "Jack" },
                  { value: "lucy", label: "Lucy" },
                  { value: "Yiminghe", label: "yiminghe" },
                ]}
              />
            </li>
            <li className="w-full">
              <button className="w-full h-full rounded-lg text-base font-bold">
                Найти
              </button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
