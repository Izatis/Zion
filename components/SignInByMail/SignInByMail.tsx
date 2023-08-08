import React, { FC, useEffect, useState } from "react";

import { Form, Image, Input, Modal } from "antd";
import google from "../../assets/secondGoogle.svg";
import apply from "../../assets/secondApply.svg";
import facebook from "../../assets/secondFacebook.svg";
import yandex from "../../assets/secondYandex.svg";

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
