import React from "react";
import { Typography, Box, Button, makeStyles } from "@material-ui/core";
import { ShoppingCart} from "@material-ui/icons";

const useStyles = makeStyles({
  container: {
    width: 350,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
    margin: "0 150px 0 0",
  },
  button: {
    background: "#fff",
    borderRadius: 2,
    width: "40%",
    height: 35,
  },
});

const Login = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Button variant="contained" className={classes.button}>
        Login
      </Button>
      <Typography>More</Typography>
      <ShoppingCart />
    </Box>
  );
};

export default Login;
