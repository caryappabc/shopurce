import React from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Badge,
  Menu,
  MenuItem,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import StoreSharpIcon from "@material-ui/icons/StoreSharp";
import useStyles from "./styles";

const Navbar = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography varient="h6" classname={classes.title} color="inherit">
            {/* <img
              src=""
              alt="Shopurce"
              height="25px"
              className={classes.image}
            /> */}
            <StoreSharpIcon fontSize="large" />
          </Typography>
          <Typography varient="h1" classname={classes.title} color="inherit">
            SHOPURCE
          </Typography>
          <div className={classes.grow} />
          <div className={classes.button}>
            <IconButton ariel-label="Show Items in Cart" color="inherit">
              <Badge badgeContent={2} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
