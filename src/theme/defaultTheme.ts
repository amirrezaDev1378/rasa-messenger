import {createTheme} from "@mui/material";
import {responsiveFontSizes} from "@mui/material";

const defaultTheme = createTheme({
    typography: {

        h3: {
            fontSize: "1.3rem",
            color: "white"
        },
        h2: {
            fontSize: "1.5rem",
            color: "white"
        },
        body2: {
            fontSize: "0.8rem",
            color: "#868e96"
        },
        body1: {
            fontSize: "1rem",
            color: "#ffffff"
        },



    },
    palette: {
        success: {
            main: "#53E04E",
            dark: "#3c9f39",
            light: "#7ce777",

        }
    },
});

export default responsiveFontSizes(defaultTheme);
