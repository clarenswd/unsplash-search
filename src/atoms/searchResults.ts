import { SearchResult } from "../types/unsplash";
import { atom, selector } from "recoil";
import demoPayload from "../assets/demoPayload";

export const searchResults = atom({
  key: "searchResults",
  default: demoPayload as SearchResult,
});

export const resultsSelector = selector({
  key: "resultsSelector",
  get: ({ get }) => {
    const searchResp = get(searchResults);
    const { results = [] } = searchResp || {};
    return results;
  },
});

export const pagesSelector = selector({
  key: "pagesSelector",
  get: ({ get }) => {
    const searchResp = get(searchResults);
    const { total_pages = 0, total = 0 } = searchResp || {};
    return { total_pages, total };
  },
});

export const searchSelector = selector({
  key: "searchSelector",
  get: ({ get }) => {
    const results = get(resultsSelector);
    return results.map((result) => {
      return {
        id: result.id ?? "",
        color: result.color ?? "",
        alt_description: result.alt_description ?? "",
        url: result.urls.small ?? "",
        likes: result.likes ?? "",
        blur_hash: result.blur_hash ?? "",
      };
    });
  },
});
