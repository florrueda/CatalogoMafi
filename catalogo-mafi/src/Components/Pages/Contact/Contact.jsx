import { Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { themeContext } from "../../../Context/theme";

const Contact = () => {
    return (
        <div>
          <ThemeProvider theme={themeContext}>
            <Typography gutterBottom variant="h2" component="div" align="center">
            Contacto
          </Typography>
          </ThemeProvider>
        </div>
    );
}

export default Contact;
