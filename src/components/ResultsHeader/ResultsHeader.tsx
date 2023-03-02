import { useRecoilValue } from "recoil";
import { previousSearchState } from "../../atoms/search";
import { pagesSelector } from "../../atoms/searchResults";

const ResultsHeader = () => {
  const { total_pages } = useRecoilValue(pagesSelector);
  const prevSearchText = useRecoilValue(previousSearchState);
  const searchText = prevSearchText[prevSearchText.length - 1];

  return (
    <>
      <p>
        {total_pages} results for "{searchText}"
      </p>
    </>
  );
};
export default ResultsHeader;
