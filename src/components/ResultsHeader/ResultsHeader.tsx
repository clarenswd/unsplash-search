import { Typography } from "@mui/material";
import { useRecoilValue } from "recoil";
import { previousSearchState } from "../../atoms/search";
import { pagesSelector } from "../../atoms/searchResults";

const ResultsHeader = () => {
  const { total_pages } = useRecoilValue(pagesSelector);
  const prevSearchText = useRecoilValue(previousSearchState);
  const searchText = prevSearchText[prevSearchText.length - 1];

  return (
    <>
      <Typography paragraph={true}>
        {total_pages} results for "{searchText}"
      </Typography>
    </>
  );
};
export default ResultsHeader;
