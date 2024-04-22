import { useState } from "react";
import Modal from "@components/global/modal/modal";

export const useModalV2 = (Details , confirmServer) => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(null);

  const handleClickOpen = (data) => {
    setOpen(true);
    setData(data)
  };

  const handleClose = () => {
    setOpen(false);
  };

  const confirm = (CU) => {
    if (CU && data) {
      confirmServer({ id: data, ...CU })
    } else {
      confirmServer(data != null ? data : CU)
    }
  };

  const ModalComponent = ({ children }) => (
    <Modal open={open} handleClose={handleClose} confirm={confirm} contents={Details} defualtButtons={false}>
      {children}
    </Modal>
  )

  const handelers = {
    open: handleClickOpen,
    close:handleClose,
    confirm:confirm
  }

  return [handelers , ModalComponent]

}