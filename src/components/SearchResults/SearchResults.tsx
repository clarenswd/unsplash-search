import { Box, Fade, ImageList, ImageListItem } from "@mui/material";
import { useRecoilValue } from "recoil";
import { searchSelector } from "../../atoms/searchResults";
import styles from "./SearchResults.styles";
import Pagination from "../Pagination";

import Image from "./Image";

const SearchResults = () => {
  const resultsSelector = useRecoilValue(searchSelector);

  return (
    <>
      <Pagination />
      <Box sx={styles.container}>
        <ImageList variant="masonry" gap={0} sx={styles.imageList}>
          {resultsSelector.map((item, index) => (
            <Fade in={!!item.id} timeout={300 * (index + 1)} key={item.id}>
              <ImageListItem>
                <Image
                  url={item.url}
                  blur_hash={item.blur_hash}
                  alt_description={item.alt_description || ""}
                />
              </ImageListItem>
            </Fade>
          ))}
        </ImageList>
      </Box>
    </>
  );
};

export default SearchResults;
