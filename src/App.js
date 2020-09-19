import React, { useState } from "react";
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import lightGreen from "@material-ui/core/colors/lightGreen";
import lime from "@material-ui/core/colors/lime";
import Header from "./components/Header";
import ProductList from "./pages/ProductList";
import { Container } from "@material-ui/core";
import Layout from "./components/Layout";

function App() {
  const [dark, setDark] = useState(false);

  const theme = createMuiTheme({
    palette: {
      type: dark ? "dark" : "light",
      primary: {
        main: lightGreen[500],
      },
      secondary: {
        main: lime["A400"],
      },
    },
  });

  const handleChange = (event) => {
    setDark((prev) => !prev);
  };

  return (
    <ThemeProvider theme={theme}>
      <Header dark={dark} handleChange={handleChange} />
      <Layout>
        <Container maxWidth="md">
          <ProductList />
        </Container>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
