import React from "react";
import { Modal as AntdModal } from "antd";

type Props = {
  title: string;
  isOpen: boolean;
  setOpen: () => void;
  handleSubmit: () => void;
  children: React.ReactNode
};

const Modal = (props: Props) => {
  const { title, isOpen, handleSubmit, setOpen, children } = props;
  return (
    <AntdModal
      title="Create Test Case"
      visible={isOpen}
      onOk={handleSubmit}
      onCancel={setOpen}
    >
      {children}
    </AntdModal>
  );
};

export default Modal;
