import { useState } from "react";

export const useModal = (confirmServer) => {
    const [open, setOpen] = useState(false);
    const [data , setData] = useState(null);

    const handleClickOpen = (data) => {
      setOpen(true);
      setData(data)
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const confirm = (CU) => {
      if(CU && data){
        confirmServer({id:data, ...CU})
      }else{
        confirmServer(data != null ? data : CU)
      }
    };
  
    return [open , handleClickOpen , handleClose , confirm ]
}