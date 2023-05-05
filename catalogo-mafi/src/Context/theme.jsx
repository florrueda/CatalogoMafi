import { createTheme } from '@mui/material';

export const themeContext = createTheme({
        typography: {
          fontFamily: ["Roboto"],
          fontSize: 12,
        },
        palette: {
          primary: {
            light: "#E2C8B3",
            main: "#CBA794",
            dark: "#B6886A",
          },
          secondary: {
            light: "#EDDAD3",
            main: "#E5DAD0",
          },
        },
        components: {
          TextField: {
            margin: "10px",
            
          }
        }
      });




