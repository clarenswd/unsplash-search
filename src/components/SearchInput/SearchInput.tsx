import { Box, TextField } from "@mui/material";
import styles from "./SearchInput.styles";
import useSearchInput from "./useSearchInput";

const SearchInput = () => {
  const { text, onChange, onPressedEnter } = useSearchInput();

  return (
    <Box sx={styles.container}>
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
