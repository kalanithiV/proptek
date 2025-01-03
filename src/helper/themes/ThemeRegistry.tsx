"use client";

import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material/styles";
import { Poppins } from "next/font/google";
import { NextAppDirEmotionCacheProvider } from "./EmotionCache";
// import { outlinedInputClasses } from "@mui/material/OutlinedInput";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "400", "200", "300", "500", "600", "700", "800", "900"],
});

const themeOptions: ThemeOptions = {
  typography: {
    fontSize: 12,
    fontFamily: poppins.style.fontFamily,
  },
  palette: {
    primary: {
      main: "#0171BB",
    },
    secondary: {
      main: "#049548",
    },
    text: {
      primary: "#fff",
      secondary: "#fff",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        root: {
          boxShadow: "none",
          borderRadius: 0,
          fontWeight: 600,
          textTransform: "inherit",
        },
      },
    },
    MuiChip: {
      defaultProps: {
        color: "primary",
      },
      styleOverrides: {
        root: {
          borderRadius: 5,
          height: "auto",
          padding: "3px 5px",
          fontSize: "13px",
        },
      },
    },
    // MuiTextField: {
    //   styleOverrides: {
    //     root: {
    //       "--TextField-brandBorderColor": "#E5E5E5",
    //       "--TextField-brandBorderHoverColor": "#E5E5E5",
    //       "--TextField-brandBorderFocusedColor": "#E5E5E5",
    //       "& label.Mui-focused": {
    //         color: "var(--TextField-brandBorderFocusedColor)",
    //       },

    //       "& .Mui-disabled": {
    //         color: "var(--background-color)",
    //         fontSize: 14,
    //         fontStyle: "normal",
    //         fontWeight: 400,
    //         "-webkit-text-fill-color": "var(--background-color)  !important",
    //       },
    //     },
    //   },
    // },
    // MuiOutlinedInput: {
    //   styleOverrides: {
    //     notchedOutline: {
    //       borderColor: "var(--TextField-brandBorderColor)",
    //     },
    //     root: {
    //       [`&:not(.Mui-error):hover .${outlinedInputClasses.notchedOutline}`]: {
    //         borderColor: "var(--TextField-brandBorderHoverColor)",
    //       },
    //       [`&:not(.Mui-error).Mui-focused .${outlinedInputClasses.notchedOutline}`]:
    //         {
    //           borderColor: "var(--TextField-brandBorderFocusedColor)",
    //         },
    //     },
    //   },
    // },
    // MuiRadio: {
    //   styleOverrides: {
    //     root: {
    //       padding: 4,
    //     },
    //   },
    // },
    // MuiFormControlLabel: {
    //   styleOverrides: {
    //     root: {
    //       marginLeft: "-6px",
    //     },
    //   },
    // },
    // MuiDivider: {
    //   styleOverrides: {
    //     root: {
    //       color: "#000",
    //       fontSize: 16,
    //       fontStyle: "normal",
    //       fontWeight: 400,
    //       lineHeight: "normal",
    //     },
    //   },
    // },
    // MuiListItemButton: {
    //   styleOverrides: {
    //     root: {
    //       "&:hover": {
    //         backgroundColor: "#FFF8F8",
    //       },
    //     },
    //   },
    // },
  },
};

const theme = createTheme(themeOptions);

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
