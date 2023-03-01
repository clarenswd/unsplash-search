import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { searchResults } from "../atoms/searchResults";
import unsplashService from "./unsplash";

const useUnsplash = () => {
  const [results, setResults] = useRecoilState(searchResults);

  const executeSearch = useCallback(
    async (query: string) => {
      const resp = await unsplashService.search(query);
      setResults(resp);
    },
    [setResults]
  );
  return { results, executeSearch };
};
export default useUnsplash;
