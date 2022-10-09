import React, { useContext, useEffect } from 'react';

import {
  ThemeProvider,
  CssBaseline,
  // AppBar,
  // Toolbar,
  // Link,
  Container,
  Box,
  Button,
  Typography,
  // CircularProgress,
  // Badge,
  // List,
  // ListItem,
} from '@material-ui/core';

import { theme, useStyles } from '../utils/styles';
import Head from 'next/head';
import NextLink from 'next/link';
import {
  CART_RETRIEVE_REQUEST,
  CART_RETRIEVE_SUCCESS,
} from '../utils/constants';
import { Store } from './Store';
import {commerce} from '../utils/commerce';
import Header from './Header/Header';
import HeaderLinks from './Header/HeaderLinks';
// import { Logo } from "/images/Logo.png"

export default function Layout({
  children,
  commercePublicKey,
  title = 'Yuck Street Wear',
}) {
  const classes = useStyles();
  const { state, dispatch } = useContext(Store);
  const { cart } = state;

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
    <React.Fragment>
      <Head>
        <meta charSet="utf-8" />
        <title>{`${title} - Yuck Street Wear`}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <Header
            brand="Yuck Street Wear"
            color="dark"
            links={
              <HeaderLinks dropdownHoverColor={"dark"}/>
            }
          />
          <Container component="main" className={classes.main}>
            {children}
          </Container>
          <Container maxWidth="lg" component="footer">
            <Box mt={5}>
              <Typography variant="body2" style={{color: "white"}} align="center">
                © {new Date().getFullYear()} Yuck StreetWear LLC.
              </Typography>
            </Box>
          </Container>
      </ThemeProvider>
    </React.Fragment>
  );
}
