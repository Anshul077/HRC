import React from "react";
import { InputBase } from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'
// import { Search } from "@material-ui/icons";

const useStyles = makeStyles({
  search: {
    height: 35,
    width: "18%",
    background: "#ffffff",
    display: "flex",
    borderRadius: 2,
    margin: "auto",
    borderRadius:8
  },
  inputRoot: {
    width: "100%",
  },
  inputInput: {
    padding: "5px 15px",
    color:'black'
  },
});

const SearchBar = () => {
  const classes = useStyles();
  return (
    <div className="search">
      <InputBase
        placeholder="Search Customer Id"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ "aria-label": "search" }}
      />
    </div>
  );
};

export default SearchBar;
