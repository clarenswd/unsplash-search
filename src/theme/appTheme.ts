import { createTheme } from "@mui/material";

const appTheme = createTheme({
  typography: {
    fontFamily: ["Gloock", "serif"].join(","),

    h1: {
      fontFamily: "'Gloock', serif",
      fontWeight: 700,
      fontSize: "2.5rem",
      color: "#4c4b4b",
      letterSpacing: "0.05rem",
    },
    body1: {
      color: "#423f3f",
    },
  },
});

export default appTheme;
