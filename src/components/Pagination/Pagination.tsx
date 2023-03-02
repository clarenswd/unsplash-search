import { Pagination as MuiPagination } from "@mui/material";
import usePagination from "./usePagination";

const Pagination = () => {
  const { total_pages, changePage } = usePagination();
  return (
    <MuiPagination
      count={total_pages}
      variant="outlined"
      color="primary"
      onChange={(event: React.ChangeEvent<unknown>, page: number) => {
        changePage(page);
      }}
    />
  );
};

export default Pagination;
