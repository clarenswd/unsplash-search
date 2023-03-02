import * as React from "react";
import Container from "@mui/material/Container";
import { Grid, ThemeProvider } from "@mui/material";

import { RecoilRoot } from "recoil";
import { SearchInput, SearchResults, Header } from "./components";
import appTheme from "./theme/appTheme";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <RecoilRoot>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Container maxWidth="xl">
              <Header />
            </Container>
          </Grid>

          <Grid item xs={12}>
            <Container maxWidth="xl">
              <SearchInput />
            </Container>
          </Grid>

          <Grid item xs={12}>
            <Container maxWidth="xl">
              <SearchResults />
            </Container>
          </Grid>
        </Grid>
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default App;
