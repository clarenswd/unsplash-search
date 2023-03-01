import { Box, TextField } from "@mui/material";
import useSearchInput from "./useSearchInput";

const SearchInput = () => {
  const { text, onChange, onPressedEnter } = useSearchInput();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        "& .MuiTextField-root": { m: 1, width: "55ch" },
      }}
    >
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        size="medium"
        value={text}
        onChange={onChange}
        onKeyDown={onPressedEnter}
      />
    </Box>
  );
};

export default SearchInput;
