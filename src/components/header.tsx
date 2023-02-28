import { Box, Typography } from "@mui/material";

const Header = () => {
  return (
    <Box sx={{ border: "1px solid red" }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Search
      </Typography>
    </Box>
  );
};

export default Header;
