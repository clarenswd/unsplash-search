import * as React from "react";
import Container from "@mui/material/Container";
import { Grid, ThemeProvider } from "@mui/material";

import { RecoilRoot } from "recoil";
import { SearchInput, SearchResults, Header } from "./components";
import appTheme from "./theme/appTheme";

function App() {
  return (
    <ThemeProvider theme={appTheme}>
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
    </ThemeProvider>
  );
}

export default App;
