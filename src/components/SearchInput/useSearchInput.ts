import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { previousSearchState, searchState } from "../../atoms/search";
import useUnsplash from "../../services/useUnsplash";

const useSearchInput = () => {
  const { executeSearch } = useUnsplash();
  const [text, setText] = useRecoilState(searchState);
  const [previousSearch, setPreviousSearch] =
    useRecoilState(previousSearchState);

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setText(e.target.value);
    },
    [setText]
  );

  const onPressedEnter = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        executeSearch(text);
        setPreviousSearch([...previousSearch, text]);
      }
    },
    [text, previousSearch, executeSearch, setPreviousSearch]
  );

  return { text, onChange, onPressedEnter };
};

export default useSearchInput;
