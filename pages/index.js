import React, { useEffect } from 'react';
import Link from 'next/link';
// import {
//   Box,
//   Card,
//   CardActionArea,
//   CardContent,
//   CardMedia,
//   Grid,
//   Slide,
//   Typography,
// } from '@material-ui/core';
import { Alert, Skeleton } from '@material-ui/lab';
import Layout from '../components/Layout';
import {commerce} from '../utils/commerce';
// import Grid, { Slide, Tooltip } from '@material-ui/core'

// nodejs library that concatenates classes
import classNames from "classnames";


// @material-ui icons
import AddShoppingCartSharp from "@material-ui/icons/AddShoppingCartSharp";
// import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
// import Cached from "@material-ui/icons/Cached";
// import Subject from "@material-ui/icons/Subject";
// import Check from "@material-ui/icons/Check";
// import Favorite from "@material-ui/icons/Favorite";


// // core components
// import Accordion from "../components/Accordion/Accordion.js";
import GridContainer from "../components/Grid/GridContainer.js";
import GridItem from "../components/Grid/GridItem.js";
import Card from "../components/Card/Card";
import CardHeader from "../components/Card/CardHeader.js";
import CardBody from "../components/Card/CardBody.js";
import CardFooter from "../components/Card/CardFooter.js";
import Button from "../components/CustomButtons/Button.js";
// import Clearfix from "../components/Clearfix/Clearfix.js";

import styles from "/styles/jss/nextjs-material-kit-pro/pages/ecommerceSections/productsStyle.js";

// import Tooltip from "@material-ui/core/Tooltip";
import { Box, CircularProgress, ThemeProvider, Container, CssBaseline, LinearProgress, Typography } from '@material-ui/core';

import { useContext, useState } from 'react';
import { useStyles } from '/utils/styles';
import { Store } from '/components/Store';
import {
  CART_RETRIEVE_REQUEST,
  CART_RETRIEVE_SUCCESS,
} from '../utils/constants';
import Router from 'next/router';
import Loading from './ShopLoading';
import Image from 'next/image';
import logo from "/images/Logo.png"
import { theme } from '/utils/styles';
export default function Home(props) {

  const classes = useStyles();
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  console.log(state)
  useEffect(() => {
    const fetchCart = async () => {
      dispatch({ type: CART_RETRIEVE_REQUEST });
      await commerce.cart.retrieve().then(
        (resp) => {
          dispatch({ type: CART_RETRIEVE_SUCCESS, payload: resp });
        }
      );
    };
    fetchCart();
  }, []);
  return (
      // <Layout>
      <ThemeProvider theme={theme}>
      <CssBaseline />

      <div style={{backgroundColor: 'black'}}>
        <div style={{    
            margin: "100px auto",
            padding: "0px",
            maxWidth: "360px",
            textAlign: "center",
            position: "relative",
            zIndex: "9999",
            top: "0"
          }}>
          <Image src={logo} width="600px" height="400px" alt="name"/>
          {(cart.loading) ? (
              <div className={classes.container}>
                <CircularProgress color='secondary'/>
              </div>
            ) : (
            <Button href="/shop" color="success" >
              Shop
            </Button>
            )}
        </div>
        <Container maxWidth="lg" component="footer">
            <Box mt={5}>
              <Typography variant="body2" style={{color: "white"}} align="center">
                © {new Date().getFullYear()} Yuck StreetWear LLC.
              </Typography>
            </Box>
          </Container>

      </div>
    </ThemeProvider>
  );
}
export async function getStaticProps() {

  const { data: products } = await commerce.products.list();
  return {
    props: {
      products,
    },
  };
}