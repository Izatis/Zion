import React, { FC, useEffect, useState } from "react";

import { Button, Form, Input, Modal } from "antd";
import Successfully from "../Successfully/Successfully";
import { useAppDispatch } from "@/hooks/redux";
import { userEmail } from "@/redux/reducers/email.slice";

interface IAccessRecoveryProps {
  isAccessRecoveryModalOpen: boolean;
  setAccessRecoveryIsModalOpen: (active: boolean) => void;
}

const AccessRecovery: FC<IAccessRecoveryProps> = ({
  isAccessRecoveryModalOpen,
  setAccessRecoveryIsModalOpen,
}) => {
  const CustomModalTitle: FC = () => {
    return (
      <div className="custom-modal-title">
        Восстановление
        <br />
        доступа
      </div>
    );
  };

  const [isSuccessfullyModalOpen, setSuccessfullyIsModalOpen] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleCancel = () => {
    setAccessRecoveryIsModalOpen(false);
  };

  // ---------------------------------------------------------------------------------------------------------------------------------
  // POST
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue({ ...form.getFieldsValue() });
  }, []);

  const handleSubmit = (value: any) => {
    setIsButtonClicked(true);
    setSuccessfullyIsModalOpen(true);
    dispatch(userEmail(value));
  };
  return (
    <>
      <Modal
        width={445}
        title={<CustomModalTitle />}
        open={isAccessRecoveryModalOpen}
        footer={null}
        onCancel={handleCancel}
      >
        <Form
          className="mt-4"
          form={form}
          name="access-recovery"
          onFinish={handleSubmit}
        >
          <Form.Item
            className="mb-6"
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
              Укажите адрес электронной почты
              <Input id="email" placeholder="hello@example.com" />
            </label>
          </Form.Item>
          <Button className="myModal__in" htmlType="submit" block>
            Сбросить пароль
          </Button>
        </Form>
      </Modal>
      <Successfully
        isSuccessfullyModalOpen={isSuccessfullyModalOpen}
        setSuccessfullyIsModalOpen={setSuccessfullyIsModalOpen}
      />
    </>
  );
};

export default AccessRecovery;
