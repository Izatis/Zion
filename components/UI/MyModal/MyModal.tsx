import React, { FC } from "react";
import { Button, Modal } from "antd";

interface IMyModalVideoProps {
  isModalOpen: boolean;
  setIsModalOpen: (active: boolean) => void;
}

const MyModal: FC<IMyModalVideoProps> = ({ isModalOpen, setIsModalOpen }) => {
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal
      title="Вход"
      open={isModalOpen}
      footer={null}
      onCancel={handleCancel}
    >
      <Button icon={"🇷🇺"} block>
        Russia
      </Button>
    </Modal>
  );
};

export default MyModal;
