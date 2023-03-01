import { atom } from "recoil";

const searchState = atom({
  key: "searchState",
  default: "Peru",
});

export default searchState;
