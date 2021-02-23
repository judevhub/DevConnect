import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import railwayPath from "./assets/Raleway/static/Raleway-Regular.ttf";
import redHatPath from "./assets/Red_Hat_Display/RedHatDisplay-Regular.ttf";


const raleway = {
  fontFamily: "Raleway",
  fontStyle: "normal",
  fontDisplay: "swap",
  src: `
    local('Raleway'),
    local('Raleway-Regular'),
    url(${railwayPath}) format('TRUETYPE')
  `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

const redHat = {
  fontFamily: "Red-Hat-Display",
  fontStyle: "normal",
  fontDisplay: "swap",
  src: `
    local('Red-Hat-Display'),
    local('Red-Hat-Display-Regular'),
    url(${redHatPath}) format('TRUETYPE')
  `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};



export const theme = createMuiTheme({
  palette: {
    type: "dark",
    background: {
      default: "#171717",
      paper: "#232323",
    },
  },
  typography: {
    fontFamily: "Red-Hat-Display,Raleway, Arial",
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [redHat, raleway],
        "*::-webkit-scrollbar": {
          width: "4px",
        },
        "*::-webkit-scrollbar-track": {
          "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
          borderRadius: 10,
        },
        "*::-webkit-scrollbar-thumb": {
          backgroundImage: "linear-gradient( #c2a0fd,  #9867f0)",
          borderRadius: 50,
        },
      },
    },
  },
});

export const themeLight = responsiveFontSizes(
  createMuiTheme({
    palette: {
      background: {
        default: "#e5e5e5",
      },
    },
    typography: {
      fontFamily: "Red-Hat-Display,Raleway, Arial",
    },
    overrides: {
      MuiCssBaseline: {
        "@global": {
          "@font-face": [redHat, raleway],
          "*::-webkit-scrollbar": {
            width: "4px",
          },
          "*::-webkit-scrollbar-track": {
            "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
            borderRadius: 10,
          },
          "*::-webkit-scrollbar-thumb": {
            backgroundImage: "linear-gradient( #c2a0fd,  #9867f0)",
            borderRadius: 50,
          },
        },
      },
    },
  })
);

//Todo : Heading - Railway
// Todo : body - red hat display
