import React, { FC, useState } from "react";

import { Button, Modal } from "antd";
import CreateAnAccount from "../CreateAnAccount/CreateAnAccount";
import SignInByMail from "../SignInByMail/SignInByMail";

interface IMyModalVideoProps {
  isModalOpen: boolean;
  setIsModalOpen: (active: boolean) => void;
}

const Entrance: FC<IMyModalVideoProps> = ({ isModalOpen, setIsModalOpen }) => {
  const [isCreateAnAccountModalOpen, setIsCreateAnAccountModalOpen] =
    useState(false);
  const [isSignInByMailModalOpen, setSignInByMailIsModalOpen] = useState(false);

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Modal
        width={445}
        title="Вход"
        open={isModalOpen}
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
                id="mask0_0_781"
                maskUnits="userSpaceOnUse"
                x="9"
                y="9"
                width="15"
                height="14"
              >
                <path
                  d="M23.1044 14.7108C23.1903 15.171 23.2371 15.6522 23.2371 16.1543C23.2371 20.0821 20.6083 22.875 16.6379 22.875C15.735 22.8753 14.8409 22.6976 14.0067 22.3522C13.1724 22.0068 12.4144 21.5004 11.776 20.862C11.1375 20.2235 10.6311 19.4655 10.2857 18.6313C9.9403 17.797 9.76266 16.9029 9.76294 16C9.76266 15.0971 9.9403 14.203 10.2857 13.3687C10.6311 12.5345 11.1375 11.7765 11.776 11.138C12.4144 10.4996 13.1724 9.99317 14.0067 9.64777C14.8409 9.30236 15.735 9.12473 16.6379 9.125C18.4943 9.125 20.0454 9.80803 21.2355 10.9171L19.2974 12.8551V12.8502C18.576 12.163 17.6604 11.8103 16.6379 11.8103C14.3696 11.8103 12.5258 13.7267 12.5258 15.9958C12.5258 18.2642 14.3696 20.1848 16.6379 20.1848C18.6961 20.1848 20.0971 19.008 20.3848 17.3919H16.6379V14.7108H23.1051H23.1044Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask0_0_781)">
                <rect x="9.00122" y="8.5" width="15" height="15" fill="white" />
              </g>
            </svg>
          }
          block
        >
          Войти с помощью Google
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
              <rect x="0.5" width="32" height="32" rx="16" fill="#1F2024" />
              <mask
                id="mask0_0_538"
                maskUnits="userSpaceOnUse"
                x="10"
                y="8"
                width="13"
                height="16"
              >
                <path
                  d="M19.4831 8.50745C19.4512 8.47182 18.3027 8.52151 17.3034 9.6062C16.304 10.6899 16.4577 11.9331 16.4802 11.9649C16.5027 11.9968 17.9052 12.0465 18.8006 10.7856C19.6959 9.52463 19.5149 8.54401 19.4831 8.50745ZM22.5899 19.5071C22.5449 19.4171 20.4102 18.3503 20.609 16.299C20.8077 14.2468 22.1793 13.6843 22.2009 13.6234C22.2224 13.5624 21.6412 12.8828 21.0252 12.5387C20.573 12.2961 20.0725 12.1571 19.5599 12.1318C19.4587 12.129 19.1071 12.0428 18.3843 12.2406C17.9081 12.3709 16.8346 12.7928 16.5393 12.8096C16.2431 12.8265 15.3618 12.3203 14.414 12.1862C13.8074 12.069 13.1643 12.309 12.704 12.4937C12.2446 12.6774 11.3709 13.2006 10.7596 14.5909C10.1484 15.9803 10.4681 18.1815 10.6968 18.8659C10.9256 19.5493 11.2827 20.6696 11.8902 21.4871C12.4302 22.4096 13.1465 23.0499 13.4456 23.2674C13.7446 23.4849 14.5884 23.6293 15.1734 23.3303C15.644 23.0415 16.4934 22.8756 16.829 22.8878C17.1637 22.8999 17.8237 23.0321 18.4996 23.3931C19.0349 23.5778 19.5412 23.5009 20.0484 23.2946C20.5556 23.0874 21.2896 22.3018 22.1465 20.709C22.4718 19.9684 22.6199 19.5681 22.5899 19.5071Z"
                  fill="white"
                />
                <path
                  d="M19.4831 8.50745C19.4512 8.47182 18.3027 8.52151 17.3034 9.6062C16.304 10.6899 16.4577 11.9331 16.4802 11.9649C16.5027 11.9968 17.9052 12.0465 18.8006 10.7856C19.6959 9.52463 19.5149 8.54401 19.4831 8.50745ZM22.5899 19.5071C22.5449 19.4171 20.4102 18.3503 20.609 16.299C20.8077 14.2468 22.1793 13.6843 22.2009 13.6234C22.2224 13.5624 21.6412 12.8828 21.0252 12.5387C20.573 12.2961 20.0725 12.1571 19.5599 12.1318C19.4587 12.129 19.1071 12.0428 18.3843 12.2406C17.9081 12.3709 16.8346 12.7928 16.5393 12.8096C16.2431 12.8265 15.3618 12.3203 14.414 12.1862C13.8074 12.069 13.1643 12.309 12.704 12.4937C12.2446 12.6774 11.3709 13.2006 10.7596 14.5909C10.1484 15.9803 10.4681 18.1815 10.6968 18.8659C10.9256 19.5493 11.2827 20.6696 11.8902 21.4871C12.4302 22.4096 13.1465 23.0499 13.4456 23.2674C13.7446 23.4849 14.5884 23.6293 15.1734 23.3303C15.644 23.0415 16.4934 22.8756 16.829 22.8878C17.1637 22.8999 17.8237 23.0321 18.4996 23.3931C19.0349 23.5778 19.5412 23.5009 20.0484 23.2946C20.5556 23.0874 21.2896 22.3018 22.1465 20.709C22.4718 19.9684 22.6199 19.5681 22.5899 19.5071Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask0_0_538)">
                <rect x="9.00098" y="8.5" width="15" height="15" fill="white" />
              </g>
            </svg>
          }
          block
        >
          Войти с помощью Apple
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
              <rect x="0.5" width="32" height="32" rx="16" fill="#4894FE" />
              <mask
                id="mask0_0_549"
                maskUnits="userSpaceOnUse"
                x="12"
                y="8"
                width="9"
                height="16"
              >
                <path
                  d="M14.7158 23.5V16.4616H12.8547V13.9274H14.7158V11.7629C14.7158 10.062 15.8152 8.5 18.3484 8.5C19.374 8.5 20.1324 8.59832 20.1324 8.59832L20.0727 10.9648C20.0727 10.9648 19.2992 10.9573 18.4552 10.9573C17.5417 10.9573 17.3953 11.3783 17.3953 12.077V13.9274H20.1453L20.0256 16.4616H17.3953V23.5H14.7158Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask0_0_549)">
                <rect x="9.00098" y="8.5" width="15" height="15" fill="white" />
              </g>
            </svg>
          }
          block
        >
          Войти с помощью Facebook
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
              <rect x="0.5" width="32" height="32" rx="16" fill="#FC3F1D" />
              <path
                d="M20.8647 6L16.2529 16.8L12.1353 8H9.5L15.2647 20.4V26H17.7353V19.4L23.5 6H20.8647Z"
                fill="white"
              />
            </svg>
          }
          block
        >
          Войти с помощью Yandex
        </Button>
        <div className="flex items-center space-x-5 mb-8">
          <hr className="w-full" />
          <span className="myModal__or font-inter text-sm font-normal">или</span>
          <hr className="w-full" />
        </div>
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
          onClick={() => {
            setIsModalOpen(false), setSignInByMailIsModalOpen(true);
          }}
        >
          Продолжить с эл. почтой
        </Button>
        <div
          className="myModal__connection cursor-pointer mt-16"
          onClick={() => {
            setIsModalOpen(false), setIsCreateAnAccountModalOpen(true);
          }}
        >
          <p>Создать аккаунт</p>
        </div>
      </Modal>
      <SignInByMail
        isSignInByMailModalOpen={isSignInByMailModalOpen}
        setSignInByMailIsModalOpen={setSignInByMailIsModalOpen}
      />
      <CreateAnAccount
        isCreateAnAccountModalOpen={isCreateAnAccountModalOpen}
        setIsCreateAnAccountModalOpen={setIsCreateAnAccountModalOpen}
      />
    </>
  );
};

export default Entrance;
