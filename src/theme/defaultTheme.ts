import {createTheme} from "@mui/material";
import {responsiveFontSizes} from "@mui/material";

const defaultTheme = createTheme({
    typography: {
        body1: {
            fontSize: "0.8rem",
        },
        h5:{
            fontWeight:"100"
        },
        h3:{
            fontWeight:"150",
            fontSize:"1.2rem"
        },
        h1:{
            fontWeight:"200",
            fontSize:"2rem"
        }

    },
    palette: {
        success: {
            main: "#00E38C",
        },
        secondary:{
            main:"#8990AD"
        }
    },
});

export default responsiveFontSizes(defaultTheme);
