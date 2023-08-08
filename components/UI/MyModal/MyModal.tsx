import React, { FC, PropsWithChildren } from "react";

import { Modal } from "antd";

interface IMyModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (active: boolean) => void;
}

const MyModal: FC<IMyModalProps> = ({
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
    >
    </Modal>
  );
};

export default MyModal;
