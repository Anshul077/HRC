import React from "react";
import { Box, makeStyles, Typography, Button } from "@material-ui/core";
import "../../index.css";

const useStyles = makeStyles({
  container: {
    width: "100%",
    height: "70vh",
    marginTop: 55,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageOver: {
    width: "100%",
    height: "100%",
  },
  container2: {
    width: "100%",
    height: "10vh",
    marginTop: 55,
    position: "absolute",
    top: 0,
    left: 0,
    transform: "skewY(-3deg)",
    transformOrigin: "top right",
    zIndex: -10,
  },
  tagline: {
    position: "absolute",
    width: "40%",
    top: 120,
    left: 70,
    "&>*": {
      fontSize: 50,
      fontFamily: "Roboto",
      color: "#fff",
    },
  },
  button: {
    fontSize: 18,
    width: "30%",
    background: "#00008B",
    marginTop: 40,
    borderRadius: 20,
    border: 0,
  },
});

const Banner = () => {
  const classes = useStyles();
  const bannerUrl =
    "https://cdn3.notifyvisitors.com/blog/wp-content/uploads/2019/01/11064310/Top-5-Push-Notifications-Templates-For-Ecommerce-Website-banner1.jpg";
  return (
    <>
      <Box className={classes.container}>
        <img src={bannerUrl} alt="BANNER" className={classes.image} />
        <Box className={classes.tagline}>
          <Typography>
            One stop <span style={{ color: "#00FFFF" }}>Shop</span> for
          </Typography>
          <Typography>everything you need</Typography>
          <Typography style={{ fontSize: 15, marginTop: 20 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
            quae praesentium! Repudiandae, excepturi dolore labore inventore
            voluptate nemo molestiae non?
          </Typography>
          <Button className={classes.button} variant="contained">
            Shop Now
          </Button>
        </Box>
      </Box>
      <Box className={classes.container2}>
        <img src={bannerUrl} alt="BANNER" className={classes.imageOver} />
      </Box>
    </>
  );
};

export default Banner;
