import React, { FC } from "react";

import { Modal } from "antd";

interface IPasswordRecoveryProps {
  isPasswordRecoveryModalOpen: boolean;
  setPasswordRecoveryIsModalOpen: (active: boolean) => void;
}

const PasswordRecovery: FC<IPasswordRecoveryProps> = ({
  isPasswordRecoveryModalOpen,
  setPasswordRecoveryIsModalOpen,
}) => {
  const handleCancel = () => {
    setPasswordRecoveryIsModalOpen(false);
  };

  return (
    <Modal
      width={445}
      title="Сброс пароля"
      open={isPasswordRecoveryModalOpen}
      footer={null}
      onCancel={handleCancel}
    ></Modal>
  );
};

export default PasswordRecovery;
