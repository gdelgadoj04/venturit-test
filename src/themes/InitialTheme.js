import { createTheme } from "@material-ui/core";
import NunitoSemiBold from "../assets/fonts/Nunito-SemiBold.ttf"
const baseTheme = createTheme({
    typography: {
        h4:{
            fontFamily: '"Nunito",sans-serif',
        },
      },
      components: {
        MuiCssBaseline: {
          styleOverrides: `
            @font-face {
              font-family: 'Nunito-SemiBold';
              font-style: normal;
              font-weight: 400;
              src: "local('Raleway'), local('Raleway-Regular'), url(${NunitoSemiBold}) format('ttf')";
         }
          `,
        },
      },
});

export default baseTheme;