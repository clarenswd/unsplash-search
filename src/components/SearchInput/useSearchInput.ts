import { useCallback } from "react";
import { useRecoilState } from "recoil";
import searchState from "../../atoms/search";
import useUnsplash from "../../hooks/useUnsplash";

const useSearchInput = () => {
  const { executeSearch } = useUnsplash();
  const [text, setText] = useRecoilState(searchState);

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
      }
    },
    [text, executeSearch]
  );

  return { text, onChange, onPressedEnter };
};

export default useSearchInput;
