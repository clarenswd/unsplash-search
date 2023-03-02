const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    "& .MuiTextField-root": {
      m: 1,
      width: "55ch",
      ".MuiInputLabel-root": {
        color: "#423f3f",
      },
      "> .MuiOutlinedInput-root.Mui-focused": {
        "> .MuiOutlinedInput-notchedOutline": {
          border: "1px solid #423f3f",
        },
      },
    },
  },
};

export default styles;
