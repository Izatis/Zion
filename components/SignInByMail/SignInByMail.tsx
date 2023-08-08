import React, { FC, useEffect, useState } from "react";

import Image from "next/image";
import { Form, Input, Modal } from "antd";
import google from "../../assets/google.svg";
import apply from "../../assets/apply.svg";
import facebook from "../../assets/facebook.svg";
import yandex from "../../assets/yandex.svg";

interface IMyModalVideoProps {
  isSignInByMailModalOpen: boolean;
  setSignInByMailIsModalOpen: (active: boolean) => void;
}

const SignInByMail: FC<IMyModalVideoProps> = ({
  isSignInByMailModalOpen,
  setSignInByMailIsModalOpen,
}) => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleCancel = () => {
    setSignInByMailIsModalOpen(false);
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
      title="Войти по почте"
      open={isSignInByMailModalOpen}
      footer={null}
      onCancel={handleCancel}
    >
      <Form form={form} name="sign-up-form" onFinish={handleSubmit}>
        <Form.Item
          name="hello@example.com"
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
          <label htmlFor="gmail">Адрес электронной почты</label>
          <Input placeholder={"Gmail"} />
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
          <label className="mb-3" htmlFor="gmail">
            Пароль <span>Забыли пароль?</span>
          </label>

          <Input.Password placeholder={"Пароль"} />
        </Form.Item>
      </Form>

      <div className="flex items-center space-x-5 mb-8">
        <hr className="w-full" />
        <span className="font-inter text-sm font-normal">или</span>
        <hr className="w-full" />
      </div>

      <div className="flex justify-center space-x-5">
        <Image src={google} alt="google" />
        <Image src={apply} alt="apply" />
        <Image src={facebook} alt="facebook" />
        <Image src={yandex} alt="yandex" />
      </div>
    </Modal>
  );
};
export default SignInByMail;
