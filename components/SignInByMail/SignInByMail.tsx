import React, { FC, useEffect, useState } from "react";

import Image from "next/image";
import { Button, Form, Input, Modal } from "antd";
import google from "@/assets/google.svg";
import apply from "@/assets/apply.svg";
import facebook from "@/assets/facebook.svg";
import yandex from "@/assets/yandex.svg";
import AccessRecovery from "../AccessRecovery/AccessRecovery";

interface IMyModalVideoProps {
  isSignInByMailModalOpen: boolean;
  setSignInByMailIsModalOpen: (active: boolean) => void;
}

const SignInByMail: FC<IMyModalVideoProps> = ({
  isSignInByMailModalOpen,
  setSignInByMailIsModalOpen,
}) => {
  const [isAccessRecoveryModalOpen, setAccessRecoveryIsModalOpen] =
    useState(false);
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
    <>
      <Modal
        width={445}
        title="Войти по почте"
        open={isSignInByMailModalOpen}
        footer={null}
        onCancel={handleCancel}
      >
        <Form form={form} name="sign-in-form" onFinish={handleSubmit}>
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
              className="flex flex-col gap-2  font-inter text-base font-medium"
              htmlFor="email"
            >
              Адрес электронной почты
              <Input id="email" placeholder="hello@example.com" />
            </label>
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
              className="flex flex-col gap-2 font-inter text-base font-medium"
              htmlFor="password"
            >
              <div className="flex justify-between">
                Пароль
                <span
                  className="cursor-pointer text-second text-sm font-medium"
                  onClick={() => {
                    setSignInByMailIsModalOpen(false),
                      setAccessRecoveryIsModalOpen(true);
                  }}
                >
                  Забыли пароль?
                </span>
              </div>
              <Input.Password id="password" placeholder="Password" />
            </label>
          </Form.Item>
          <Button className="myModal__in" htmlType="submit" block>
            Войти
          </Button>
        </Form>
        <div className="flex items-center space-x-5 mb-8">
          <hr className="w-full" />
          <span className="myModal__or font-inter text-sm font-normal">
            или
          </span>
          <hr className="w-full" />
        </div>
        <div className="flex justify-center space-x-5">
          <Image className="cursor-pointer" src={google} alt="google" />
          <Image className="cursor-pointer" src={apply} alt="apply" />
          <Image className="cursor-pointer" src={facebook} alt="facebook" />
          <Image className="cursor-pointer" src={yandex} alt="yandex" />
        </div>
      </Modal>

      <AccessRecovery
        isAccessRecoveryModalOpen={isAccessRecoveryModalOpen}
        setAccessRecoveryIsModalOpen={setAccessRecoveryIsModalOpen}
      />
    </>
  );
};
export default SignInByMail;
