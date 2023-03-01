import { Box, Fade, ImageList, ImageListItem } from "@mui/material";
import { useRecoilValue } from "recoil";
import { searchSelector } from "../../atoms/searchResults";
import styles from "./SearchResults.styles";

const SearchResults = () => {
  const resultsSelector = useRecoilValue(searchSelector);

  return (
    <Box sx={styles.container}>
      <ImageList variant="masonry" gap={6} sx={styles.imageList}>
        {resultsSelector.map((item, index) => (
          <Fade in={!!item.id} timeout={200 * (index + 1)} key={item.id}>
            <ImageListItem>
              <img src={item.url} alt={item.alt_description} loading="lazy" />
            </ImageListItem>
          </Fade>
        ))}
      </ImageList>
    </Box>
  );
};

export default SearchResults;
