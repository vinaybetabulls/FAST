import React from "react";
import { Modal as AntdModal } from "antd";

type Props = {
  title: string;
  isOpen: boolean;
  setOpen: () => void;
  children: React.ReactNode;
};

const Modal = (props: Props) => {
  const { title, isOpen, setOpen, children } = props;
  return (
    <AntdModal title={title} visible={isOpen} footer={null} destroyOnClose={true} onCancel={setOpen}>
      {children}
    </AntdModal>
  );
};

export default Modal;
