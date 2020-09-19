import React, { useState } from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import lightGreen from "@material-ui/core/colors/lightGreen";
import lime from "@material-ui/core/colors/lime";
import Header from "./components/Header";
import ProductList from "./pages/ProductList";
import { Container } from "@material-ui/core";
import Layout from "./components/Layout";
import ProductDetail from "./pages/ProductDetail";

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
      <Router>
        <Header dark={dark} handleChange={handleChange} />
        <Layout>
          <Container maxWidth="md">
            <Switch>
              <Route path="/" exact>
                <ProductList />
              </Route>
              <Route path="/product">
                <ProductDetail />
              </Route>
            </Switch>
          </Container>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
