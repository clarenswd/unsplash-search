import { createApi } from "unsplash-js";
import { SearchResult } from "../types/unsplash";

const unsplashApiKey = process.env.REACT_APP_UNSPLASH_KEY || "";

const unSplashApi = createApi({
  accessKey: unsplashApiKey,
});

const search = async (query: string, page?: number): Promise<SearchResult> => {
  const resp = await unSplashApi.search.getPhotos({
    query,
    page: page ?? 1,
    perPage: 20,
    orientation: "portrait",
  });
  return resp.response as unknown as SearchResult;
};

const unSplash = { unSplashApi, search };
export default unSplash;
