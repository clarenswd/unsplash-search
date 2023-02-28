import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import { Grid, ImageList, ImageListItem } from "@mui/material";
import SearchInput from "./components/searchInput";
import Header from "./components/header";
import SearchResults from "./components/searchResults";
// import useUnsplash from "./hooks/useUnsplash";

function App() {
  // useUnsplash();

  return (
    <Grid container spacing={2}>
      {/* Header/Hero section */}
      <Grid item xs={12} lg={12}>
        <Container maxWidth="lg">
          <Header />
        </Container>
      </Grid>
      {/* Search area */}
      <Grid item xs={12}>
        <Container maxWidth="lg">
          <SearchInput />
        </Container>
      </Grid>

      {/* Image results */}
      <Grid item xs={12}>
        <Container maxWidth="lg">
          <SearchResults />
        </Container>
      </Grid>
    </Grid>
  );
}

export default App;
