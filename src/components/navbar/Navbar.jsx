import React from "react";
import { AppBar, Toolbar, makeStyles } from "@material-ui/core";
import SearchBar from "./SearchBar";
import Login from "./Login";

const useStyles = makeStyles({
  header: {
    height: 55,
    background: "#512888",
    display: "flex",
    justifyContent: "center",
  },
});

const Navbar = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar className={classes.header}>
        <Toolbar>
          <SearchBar />
          <Login />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
