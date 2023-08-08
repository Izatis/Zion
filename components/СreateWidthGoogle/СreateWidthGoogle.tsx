import React, { FC, useEffect, useState } from "react";

import Image from "next/image";
import { Button, Form, Input, Modal } from "antd";
import google from "@/assets/google.svg";
import apply from "@/assets/apply.svg";
import facebook from "@/assets/facebook.svg";
import yandex from "@/assets/yandex.svg";

interface IСreateWidthGoogleProps {
  isСreateWidthGoogleModalOpen: boolean;
  setIsСreateWidthGoogleModalOpen: (active: boolean) => void;
}

const СreateWidthGoogle: FC<IСreateWidthGoogleProps> = ({
  isСreateWidthGoogleModalOpen,
  setIsСreateWidthGoogleModalOpen,
}) => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleCancel = () => {
    setIsСreateWidthGoogleModalOpen(false);
  };
  // ---------------------------------------------------------------------------------------------------------------------------------
  // POST
  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue({ ...form.getFieldsValue() });
  }, []);

  const handleSubmit = (value: any) => {
    setIsButtonClicked(true);
  };
  return (
    <Modal
      width={445}
      title="Создать аккаунт"
      open={isСreateWidthGoogleModalOpen}
      footer={null}
      onCancel={handleCancel}
    >
      <Form form={form} name="sign-up-form" onFinish={handleSubmit}>
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: "Пожалуйста, введите ваше имю",
            },
          ]}
        >
          <label
            className="block font-inter text-base font-medium mb-2"
            htmlFor="name"
          >
            Имя
          </label>
          <Input id="name" placeholder="Валентина" />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Пожалуйста, введите адрес электронной почты",
            },
            {
              type: isButtonClicked ? "email" : undefined,
              message:
                "Пожалуйста, введите действительный адрес электронной почты",
            },
          ]}
        >
          <label
            className="block font-inter text-base font-medium mb-2"
            htmlFor="email"
          >
            Адрес электронной почты
          </label>
          <Input id="email" placeholder="hello@example.com" />
        </Form.Item>
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
            className="block font-inter text-base font-medium mb-2"
            htmlFor="password"
          >
            Пароль
          </label>
          <Input.Password id="password" placeholder="Password" />
        </Form.Item>
        <p className="text-fourth font-inter text-sm font-light mb-4">
          Продолжая, Вы даете
          <span className="text-second">
            согласие на обработку <br /> персональных данных.
          </span>
        </p>
        <Button className="myModal__in" htmlType="submit" block>
          Зарегестрироваться
        </Button>
      </Form>
      <div className="flex items-center space-x-5 mb-8">
        <hr className="w-full" />
        <span className="myModal__or font-inter text-sm font-normal">или</span>
        <hr className="w-full" />
      </div>

      <div className="flex justify-center space-x-5">
        <Image className="cursor-pointer" src={google} alt="google" />
        <Image className="cursor-pointer" src={apply} alt="apply" />
        <Image className="cursor-pointer" src={facebook} alt="facebook" />
        <Image className="cursor-pointer" src={yandex} alt="yandex" />
      </div>
    </Modal>
  );
};

export default СreateWidthGoogle;
