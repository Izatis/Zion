import React, { FC, useEffect } from "react";

import { Form, Image, Modal } from "antd";
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
  const handleCancel = () => {
    setSignInByMailIsModalOpen(false);
  };
  // ---------------------------------------------------------------------------------------------------------------------------------
  // POST
  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue({ ...form.getFieldsValue() });
  }, []);

  const handleSubmit = (value: any) => {};

  return (
    <Modal
      width={445}
      title="Войти по почте"
      open={isSignInByMailModalOpen}
      footer={null}
      onCancel={handleCancel}
    >
      <Form form={form} name="sign-up-form" onFinish={handleSubmit}>
        
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
