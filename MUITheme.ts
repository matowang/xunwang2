import { createTheme } from "@mui/material/styles";

const MUITheme = createTheme({
  typography: {
    fontFamily: ["Source Code Pro", "monospace"].join(","),
  },
  palette: {
    primary: {
      main: "#a8e1ff",
    },
    secondary: {
      main: "rgba(234,114,23,0.85)",
    },
    background: {
      default: "#000000",
      paper: "#161616",
    },
    text: {
      primary: "rgba(255,255,255,0.87)",
    },
  },
  components: {
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          background: "none",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderColor: "#rgba(255,255,255,.75)",
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "rgba(255,255,255,.75)",
              borderRadius: 0,
            },
          },
          "& .MuiInputLabel-outlined": {
            color: "rgba(255,255,255,.75)",
          },
          "& .Mui-disabled.MuiOutlinedInput-root": {
            background: "#ffffff57",
            color: "rgba(255,255,255,.75)",
          },
        },
      },
    },
  },
});

export default MUITheme;
