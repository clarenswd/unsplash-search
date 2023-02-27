import { SearchResult } from "../types/unsplash";
import { atom } from "recoil";

export const searchResults = atom({
  key: "searchResults",
  default: {} as SearchResult,
});
