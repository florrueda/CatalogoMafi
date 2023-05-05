import "./Footer.css";
import { Link } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { themeContext } from "../../../Context/theme";
import { AppBar } from "@mui/material";

const Footer = () => {
  return (
    <ThemeProvider theme={themeContext}>
      <AppBar position="static" sx={{ backgroundColor: "primary" }}>
        <footer>
          <p>Copyright Mafi</p>
          <Link
            to="https://florrueda.github.io/"
            target="_blank"
            className='design'
          >
            Designed by Florencia Rueda
          </Link>
        </footer>
      </AppBar>
    </ThemeProvider>
  );
};

export default Footer;
