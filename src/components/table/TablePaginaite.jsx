import { Stack , Pagination } from "@mui/material";

import React from "react";
const TablePaginaite = ({
  Data,
  handelChangePaginaite,
  pageParam
}) => {
  return <Stack spacing={20}>
    <Pagination count={Data?.totalCount} variant="outlined" shape="rounded" className="fff" color="secondary" onChange={handelChangePaginaite} defaultPage={pageParam} />
  </Stack>;
}

export default TablePaginaite
