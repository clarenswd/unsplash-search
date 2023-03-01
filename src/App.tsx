import * as React from "react";
import Container from "@mui/material/Container";

import { Grid } from "@mui/material";
import Header from "./components/header";
import SearchResults from "./components/searchResults";

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { SearchInput } from "./components";

function App() {
  return (
    <RecoilRoot>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={12}>
          <Container maxWidth="lg">
            <Header />
          </Container>
        </Grid>

        <Grid item xs={12}>
          <Container maxWidth="lg">
            <SearchInput />
          </Container>
        </Grid>

        <Grid item xs={12}>
          <Container maxWidth="lg">
            <SearchResults />
          </Container>
        </Grid>
      </Grid>
    </RecoilRoot>
  );
}

export default App;
