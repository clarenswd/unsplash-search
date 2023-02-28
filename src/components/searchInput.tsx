import { Box, TextField } from "@mui/material";

const SearchInput = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        border: "1px solid blue",
        "& .MuiTextField-root": { m: 1, width: "55ch" },
      }}
    >
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        size="medium"
      />
    </Box>
  );
};

export default SearchInput;
