import { TextField, Button, Box, Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { themeContext } from "../../../Context/theme";

const CreateProduct = ({ handleChange, handleSubmit }) => {
  return (
    <div>
      <ThemeProvider theme={themeContext}>
        <Container maxWidth="sm">
          <h1>Crear un nuevo producto</h1>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "space-around",
              "& .MuiTextField-root": { m: 1 },
            }}
          >
            <div style={{ display: "flex" }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Nombre del producto"
                name="name"
                autoComplete="Nombre del producto"
                autoFocus
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="description"
                label="Descripcion del producto"
                name="description"
                autoComplete="Descripcion del producto"
                autoFocus
                onChange={handleChange}
              />
            </div>
            <div style={{ display: "flex" }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="price"
                label="Precio del producto"
                name="price"
                autoComplete="Precio del producto"
                autoFocus
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="size"
                label="Talle del producto"
                name="size"
                autoComplete="Talle del producto"
                autoFocus
                onChange={handleChange}
              />
            </div>
            <div style={{ display: "flex" }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="stock"
                label="Stock del producto"
                name="stock"
                autoComplete="Stock del producto"
                autoFocus
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="category"
                label="Categoria del producto"
                name="category"
                autoComplete="Categoria del producto"
                autoFocus
                onChange={handleChange}
              />
            </div>
            <div style={{ display: "flex" }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="img"
                label="Imagen del producto"
                name="img"
                autoComplete="Imagen del producto"
                autoFocus
                onChange={handleChange}
              />
            </div>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Crear
            </Button>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default CreateProduct;
