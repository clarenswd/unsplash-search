import { Box, Fade, ImageList, ImageListItem } from "@mui/material";
import { useRecoilValue } from "recoil";
import { searchSelector } from "../atoms/searchResults";

const SearchResults = () => {
  const resultsSelector = useRecoilValue(searchSelector);

  return (
    <Box sx={{ overflowY: "auto" }}>
      <ImageList
        variant="masonry"
        sx={{
          columnCount: {
            xs: "3 !important",
            sm: "4 !important",
            md: "5 !important",
            lg: "6 !important",
            xl: "8 !important",
          },
        }}
        gap={6}
      >
        {resultsSelector.map((item, index) => (
          <Fade in={!!item.id} timeout={200 * (index + 1)} key={item.id}>
            <ImageListItem>
              <img
                src={`${item.url}`}
                alt={item.alt_description}
                loading="lazy"
              />
            </ImageListItem>
          </Fade>
        ))}
      </ImageList>
    </Box>
  );
};

export default SearchResults;
