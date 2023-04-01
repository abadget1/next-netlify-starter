import React, { useContext } from "react";  
import { Box, Button, CircularProgress, Grid, LinearProgress, Typography } from '@material-ui/core'
import { Store } from '/components/Store';
import Stack from '@material-ui/lab/';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// import CircularProgress from "@material-ui/core/CircularProgress";

// core components
import {
  infoColor,
  whiteColor,
  title
} from "/styles/jss/nextjs-material-kit-pro.js";
import Logo from '/images/Logo.png'
import Layout from "@components/Layout";
import { Skeleton } from "@material-ui/lab";
import GridItem from "@components/Grid/GridItem";
import GridContainer from "@components/Grid/GridContainer";
import CardHeader from "@components/Card/CardHeader";
import CardBody from "@components/Card/CardBody";
import Card from "@components/Card/Card";
import CardFooter from "@components/Card/CardFooter";
import { AddShoppingCartSharp } from "@material-ui/icons";
import classNames from "classnames";

const useStyles = makeStyles({
  progress: {
    color: infoColor[0],
    width: "6rem !important",
    height: "6rem !important"
  },
  wrapperDiv: {
    margin: "100px auto",
    padding: "0px",
    maxWidth: "360px",
    textAlign: "center",
    position: "relative",
    zIndex: "9999",
    top: "0"
  },
  iconWrapper: {
    display: "block"
  },
  title: {
    ...title,
    color: whiteColor
  }
});


const Welcome = () => {
  const { state, dispatch } = useContext(Store);
  return (
    <div>
      <LinearProgress/>
    </div>
  )
}

export default Welcome;
