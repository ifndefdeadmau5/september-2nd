import React, { useState } from "react";
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import lightGreen from "@material-ui/core/colors/lightGreen";
import lime from "@material-ui/core/colors/lime";
import Header from "./components/Header";
import HeaderSecond from "./components/Header2";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  paper: {
    width: "100%",
    height: "100vh",
  },
}));

function App() {
  const classes = useStyles();
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
      <HeaderSecond>
        <Switch checked={dark} onChange={handleChange} />
      </HeaderSecond>
      <Paper className={classes.paper}>
        <Typography>Content</Typography>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
