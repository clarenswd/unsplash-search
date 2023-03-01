import { Box, ImageList, ImageListItem } from "@mui/material";
import { useRecoilValue } from "recoil";
import { searchSelector } from "../atoms/searchResults";

const SearchResults = () => {
  const resultsSelector = useRecoilValue(searchSelector);

  return (
    <Box sx={{ overflowY: "auto" }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {resultsSelector.map((item) => (
          <ImageListItem key={item.id}>
            <img
              src={`${item.url}`}
              alt={item.alt_description}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default SearchResults;
