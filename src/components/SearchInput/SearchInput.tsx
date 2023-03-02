import { Box, InputAdornment, TextField } from "@mui/material";
import styles from "./SearchInput.styles";
import useSearchInput from "./useSearchInput";
import SearchIcon from "@mui/icons-material/Search";

const SearchInput = () => {
  const { text, onChange, onPressedEnter } = useSearchInput();

  return (
    <Box sx={styles.container}>
      <TextField
        id="outlined-basic"
        label="Some ideas, Peru, small cats, funny dogs..."
        variant="outlined"
        size="medium"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        value={text}
        onChange={onChange}
        onKeyDown={onPressedEnter}
      />
    </Box>
  );
};

export default SearchInput;
