import React, { FC, useEffect, useState } from "react";

import Image from "next/image";
import { Button, Form, Input, Modal } from "antd";
import { useAppDispatch } from "@/hooks/redux";
import { userRegistration } from "@/redux/reducers/auth.slice";
import google from "@/assets/google.svg";
import apply from "@/assets/apply.svg";
import facebook from "@/assets/facebook.svg";
import yandex from "@/assets/yandex.svg";

interface IСreateWidthGoogleProps {
  isСreateWidthGoogleModalOpen: boolean;
  setIsСreateWidthGoogleModalOpen: (active: boolean) => void;
}

interface IUserRegister {
  email: string;
  password: string;
  first_name: string;
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
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue({ ...form.getFieldsValue() });
  }, []);

  const handleSubmit = (value: IUserRegister) => {
    setIsButtonClicked(true);
    const newValue = {
      ...value,
      repeated_password: value.password,
    };
    dispatch(userRegistration(newValue));
  };
  return (
    <Modal
      width={445}
      title="Создать аккаунт"
      open={isСreateWidthGoogleModalOpen}
      footer={null}
      onCancel={handleCancel}
    >
      <Form
        className="mt-4"
        form={form}
        name="sign-up-form"
        onFinish={handleSubmit}
      >
        <Form.Item
          className="mb-4"
          name="first_name"
          rules={[
            {
              required: true,
              message: "Пожалуйста, введите ваше имю",
            },
          ]}
        >
          <label
            className="flex flex-col gap-2 font-inter text-base font-medium"
            htmlFor="first_name"
          >
            Имя
            <Input id="first_name" placeholder="Валентина" />
          </label>
        </Form.Item>
        <Form.Item
          className="mb-4"
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
            className="flex flex-col gap-2 font-inter text-base font-medium"
            htmlFor="email"
          >
            Адрес электронной почты
            <Input id="email" placeholder="hello@example.com" />
          </label>
        </Form.Item>
        <Form.Item
          className="mb-6"
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
        <p className="text-fourth font-inter text-sm font-light mb-4">
          Продолжая, Вы даете{" "}
          <span className="text-second">
            согласие на обработку <br /> персональных данных.
          </span>
        </p>
        <Button className="myModal__in mb-6" htmlType="submit" block>
          Зарегестрироваться
        </Button>
      </Form>
      <div className="flex items-center gap-6 mb-6">
        <hr className="w-full" />
        <span className="myModal__or font-inter text-sm font-normal">или</span>
        <hr className="w-full" />
      </div>
      <div className="flex justify-center gap-5">
        <Image className="cursor-pointer" src={google} alt="google" />
        <Image className="cursor-pointer" src={apply} alt="apply" />
        <Image className="cursor-pointer" src={facebook} alt="facebook" />
        <Image className="cursor-pointer" src={yandex} alt="yandex" />
      </div>
    </Modal>
  );
};

export default СreateWidthGoogle;
