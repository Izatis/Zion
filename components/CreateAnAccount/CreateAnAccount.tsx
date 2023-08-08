import React, { FC } from "react";

import Image from "next/image";
import { Button, Modal } from "antd";
import apply from "../../assets/firstApply.svg";
import facebook from "../../assets/firstFacebook.svg";
import yandex from "../../assets/firstYandex.svg";

interface IMyModalVideoProps {
  isCreateAnAccountModalOpen: boolean;
  setIsCreateAnAccountModalOpen: (active: boolean) => void;
}
const CreateAnAccount: FC<IMyModalVideoProps> = ({
  isCreateAnAccountModalOpen,
  setIsCreateAnAccountModalOpen,
}) => {
  const handleCancel = () => {
    setIsCreateAnAccountModalOpen(false);
  };
  return (
    <Modal
      width={445}
      title="Создать аккаунт"
      open={isCreateAnAccountModalOpen}
      footer={null}
      onCancel={handleCancel}
    >
      <Button
        icon={
          <svg
            width="33"
            height="32"
            viewBox="0 0 33 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0.5" width="32" height="32" rx="16" fill="#ED3241" />
            <mask
              id="mask0_0_527"
              maskUnits="userSpaceOnUse"
              x="9"
              y="9"
              width="15"
              height="14"
            >
              <path
                d="M23.1041 14.7108C23.19 15.171 23.2368 15.6522 23.2368 16.1543C23.2368 20.0821 20.6081 22.875 16.6377 22.875C15.7348 22.8753 14.8407 22.6976 14.0064 22.3522C13.1722 22.0068 12.4142 21.5004 11.7757 20.862C11.1373 20.2235 10.6309 19.4655 10.2855 18.6313C9.94006 17.797 9.76242 16.9029 9.7627 16C9.76242 15.0971 9.94006 14.203 10.2855 13.3687C10.6309 12.5345 11.1373 11.7765 11.7757 11.138C12.4142 10.4996 13.1722 9.99317 14.0064 9.64777C14.8407 9.30236 15.7348 9.12473 16.6377 9.125C18.494 9.125 20.0452 9.80803 21.2352 10.9171L19.2972 12.8551V12.8502C18.5757 12.163 17.6601 11.8103 16.6377 11.8103C14.3693 11.8103 12.5255 13.7267 12.5255 15.9958C12.5255 18.2642 14.3693 20.1848 16.6377 20.1848C18.6959 20.1848 20.0968 19.008 20.3846 17.3919H16.6377V14.7108H23.1048H23.1041Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask0_0_527)">
              <rect x="9.00098" y="8.5" width="15" height="15" fill="white" />
            </g>
          </svg>
        }
        block
      >
        Продолжить с Google
      </Button>
      <Button
        icon={
          <svg
            width="33"
            height="32"
            viewBox="0 0 33 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.5 9.33335C4.5 8.62611 4.78095 7.94783 5.28105 7.44774C5.78115 6.94764 6.45942 6.66669 7.16667 6.66669H25.8333C26.5406 6.66669 27.2189 6.94764 27.719 7.44774C28.219 7.94783 28.5 8.62611 28.5 9.33335M4.5 9.33335V22.6667C4.5 23.3739 4.78095 24.0522 5.28105 24.5523C5.78115 25.0524 6.45942 25.3334 7.16667 25.3334H25.8333C26.5406 25.3334 27.2189 25.0524 27.719 24.5523C28.219 24.0522 28.5 23.3739 28.5 22.6667V9.33335M4.5 9.33335L16.5 17.3334L28.5 9.33335"
              stroke="#4894FE"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        }
        block
      >
        Продолжить с эл. почтой
      </Button>
      <div className="flex items-center space-x-5 mb-8">
        <hr className="w-full" />
        <span className="font-inter text-sm font-normal">или</span>
        <hr className="w-full" />
      </div>

      <div className="flex justify-center space-x-5">
        <Image src={apply} alt="apply" />
        <Image src={facebook} alt="facebook" />
        <Image src={yandex} alt="yandex" />
      </div>

      <div className="myModal_createAccount mt-16">
        <p>Войти в аккаунт</p>
      </div>
    </Modal>
  );
};

export default CreateAnAccount;
