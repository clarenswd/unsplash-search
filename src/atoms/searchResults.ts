import { SearchResult } from "../types/unsplash";
import { atom, selector } from "recoil";

export const searchResults = atom({
  key: "searchResults",
  default: {} as SearchResult,
});

export const resultsSelector = selector({
  key: "resultsSelector",
  get: ({ get }) => {
    const searchResp = get(searchResults);
    const { results = [] } = searchResp;
    return results;
  },
});

export const searchSelector = selector({
  key: "searchSelector",
  get: ({ get }) => {
    const results = get(resultsSelector);
    return results.map((result) => {
      return {
        id: result.id,
        color: result.color,
        alt_description: result.alt_description,
        url: result.urls.small,
        likes: result.likes,
      };
    });
  },
});
