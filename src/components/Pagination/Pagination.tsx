import { Pagination as MuiPagination } from "@mui/material";
import usePagination from "./usePagination";

const Pagination = () => {
  const { pages, changePage } = usePagination();
  return (
    <MuiPagination
      count={pages}
      variant="outlined"
      color="primary"
      onChange={(event: React.ChangeEvent<unknown>, page: number) => {
        changePage(page);
      }}
    />
  );
};

export default Pagination;
