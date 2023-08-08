import React, { FC } from "react";

import { Modal } from "antd";

interface IСreateWidthGoogleProps {
  isModalOpen: boolean;
  setIsModalOpen: (active: boolean) => void;
  children: any;
}

const СreateWidthGoogle: FC<IСreateWidthGoogleProps> = ({
  isModalOpen,
  setIsModalOpen,
}) => {
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <Modal
      width={445}
      title="Вход"
      open={isModalOpen}
      footer={null}
      onCancel={handleCancel}
    ></Modal>
  );
};

export default СreateWidthGoogle;
