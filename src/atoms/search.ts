import { atom } from "recoil";

const defaultSearchText = "Peru";

export const searchState = atom({
  key: "searchState",
  default: defaultSearchText,
});

export const previousSearchState = atom({
  key: "previousSearchState",
  default: [defaultSearchText],
});
