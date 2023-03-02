const styles = {
  resultsInfo: {
    display: "flex",
    justifyContent: "flex-end",
    "> .MuiTypography-paragraph": { marginBottom: "0px" },
  },
  container: {
    overflowY: "auto",
    overflowX: "hidden",
    "> .MuiImageList-masonry": {
      marginTop: "5px",
    },
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center",
  },
  imageList: {
    overflowX: "hidden",
    columnCount: {
      xs: "2 !important",
      sm: "5 !important",
    },
  },
};
export default styles;
