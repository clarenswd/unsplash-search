import { useCallback } from "react";
import { useRecoilValue } from "recoil";
import searchState from "../../atoms/search";
import { pagesSelector } from "../../atoms/searchResults";
import useUnsplash from "../../services/useUnsplash";

const usePagination = () => {
  const { executeSearch } = useUnsplash();
  const pages = useRecoilValue(pagesSelector);
  const searchQuery = useRecoilValue(searchState);

  const changePage = useCallback(
    async (page: number) => {
      executeSearch(searchQuery, page);
    },
    [searchQuery, executeSearch]
  );
  return { pages, changePage };
};
export default usePagination;
