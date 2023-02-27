import { useEffect } from "react";
import unSplashApi from "../services/unsplash";

const useUnsplash = () => {
  useEffect(() => {
    const searchPhotos = async (query: string = "cat") => {
      const resp = await unSplashApi.search.getPhotos({
        query,
        page: 1,
        perPage: 10,
        color: "green",
        orientation: "portrait",
      });
      console.log(resp);
    };
    searchPhotos("dog");
  }, []);
};
export default useUnsplash;
