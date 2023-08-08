import React, { FC, PropsWithChildren } from "react";

import { Modal } from "antd";

interface IMyModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (active: boolean) => void;
  children: any;
}

const MyModal: FC<IMyModalProps> = ({
  isModalOpen,
  setIsModalOpen,
  children,
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
    >
      {children}
    </Modal>
  );
};

export default MyModal;
