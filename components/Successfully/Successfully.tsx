import React, { FC } from "react";

import Image from "next/image";
import { Modal } from "antd";
import message from "@/assets/message.svg";

interface ISuccessfullyProps {
  isSuccessfullyModalOpen: boolean;
  setSuccessfullyIsModalOpen: (active: boolean) => void;
}

const Successfully: FC<ISuccessfullyProps> = ({
  isSuccessfullyModalOpen,
  setSuccessfullyIsModalOpen,
}) => {
  const handleCancel = () => {
    setSuccessfullyIsModalOpen(false);
  };

  return (
    <Modal
      width={445}
      open={isSuccessfullyModalOpen}
      footer={null}
      onCancel={handleCancel}
    >
      <div className="flex flex-col items-center">
        <Image className="mb-2" src={message} alt="message" />
        <b className="text-three text-3xl font-semibold mb-4">Успешно</b>
        <p className="text-center text-seventh text-lg font-normal">
          На указанный Вами Email было отправлено письмо с ссылкой для сброса
          пароля. Вам необходимо перейти по ссылке и задать новый пароль.
        </p>
      </div>
    </Modal>
  );
};

export default Successfully;
