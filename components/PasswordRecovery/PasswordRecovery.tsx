import React, { FC, useEffect, useState } from "react";

import { Button, Form, Input, Modal } from "antd";

interface IPasswordRecoveryProps {
  isPasswordRecoveryModalOpen: boolean;
  setPasswordRecoveryIsModalOpen: (active: boolean) => void;
}

const PasswordRecovery: FC<IPasswordRecoveryProps> = ({
  isPasswordRecoveryModalOpen,
  setPasswordRecoveryIsModalOpen,
}) => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [passwordMismatchMessage, setPasswordMismatchMessage] = useState("");

  const handleCancel = () => {
    setPasswordRecoveryIsModalOpen(false);
  };
  // ---------------------------------------------------------------------------------------------------------------------------------
  // POST
  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue({ ...form.getFieldsValue() });
  }, []);

  const handleSubmit = (value: any) => {
    setIsButtonClicked(true);
    const { password, passwordСonfirmation } = value;
    if (password !== passwordСonfirmation) {
      setPasswordMismatchMessage("Пароли не совпадают!");
    } else {
    }
  };
  return (
    <Modal
      width={445}
      title="Сброс пароля"
      open={isPasswordRecoveryModalOpen}
      footer={null}
      onCancel={handleCancel}
    >
      <p className="text-tenth font-inter text-base font-medium mt-4 mb-6">
        Ваш аккаунт: hello@example.com
      </p>
      <b className="inline-block text-three font-inter text-xl font-semibold mb-3">
        Укажите новый пароль
      </b>
      <Form form={form} name="password-recovery" onFinish={handleSubmit}>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Пожалуйста введите ваш пароль",
            },
            {
              min: isButtonClicked ? 6 : undefined,
              message: "Пароль должен содержать не менее 6 знаков",
            },
          ]}
        >
          <label
            className="flex flex-col gap-2 font-inter text-base font-medium"
            htmlFor="password"
          >
            Пароль
            <Input.Password id="password" placeholder="Password" />
          </label>
        </Form.Item>
        <Form.Item
          name="passwordСonfirmation"
          rules={[
            {
              required: true,
              message: "Пожалуйста, подтвердите свой пароль",
            },
            {
              message: passwordMismatchMessage,
            },
          ]}
        >
          <label
            className="flex flex-col gap-2 font-inter text-base font-medium"
            htmlFor="passwordСonfirmation"
          >
            Пароль
            <Input.Password id="passwordСonfirmation" placeholder="Password" />
          </label>
        </Form.Item>
        <Button className="myModal__in" htmlType="submit" block>
          Сохранить
        </Button>
      </Form>
    </Modal>
  );
};

export default PasswordRecovery;
