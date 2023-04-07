import React from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  TextField
} from "@material-ui/core";
import useStyles from "./styles.js";

function Navbar(props) {
  const isLoggedIn = props.isLoggedIn;
  const user = props.user;
  const classes = useStyles({ isLoggedIn });

  console.log("nav bar props ", props);
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: "#0c0c0c" }}>
        <Toolbar className={classes.toolBar}>
          <Typography variant="h6" className={classes.title}>
            Nepflix
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Contact</Button>
          <TextField label="Search" variant="standard" />
          {user &&
            <Typography>
              {props.user.name}
            </Typography>}
          <Button className={classes.authbth}>
            {isLoggedIn ? "Logout" : "Log In"}
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
