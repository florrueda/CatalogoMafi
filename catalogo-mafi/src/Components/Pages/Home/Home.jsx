import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import logo from "../../../assets/img/osomafi.jpg";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { Button, Typography } from "@mui/material";
import { themeContext } from "../../../Context/theme";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <img src={logo} id='home-img'></img>
      <ThemeProvider theme={themeContext}>
        <Typography gutterBottom variant="h2" align="center">
          Bienvenidos a Mafi 
        </Typography>
        <Button variant="contained" sx={{margin: '1rem', fontSize: "1rem" }} onClick={() => navigate("/products")}>
          Ir a la tienda
        </Button>
      </ThemeProvider>
    </div>
  );
};

export default Home;
