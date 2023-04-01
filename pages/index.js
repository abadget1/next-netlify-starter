import React, { useEffect } from 'react';
import Button from "../components/CustomButtons/Button.js";

import styles from "/styles/jss/nextjs-material-kit-pro/pages/ecommerceSections/productsStyle.js";

import { Box, CircularProgress, ThemeProvider, Container, CssBaseline, LinearProgress, Typography } from '@material-ui/core';

import { useContext, useState } from 'react';

import Image from 'next/image';
import logo from "/images/Logo.png"
import { theme } from '/utils/styles';
import Link from 'next/link.js';


export default function Home() {
  const classes = styles;
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowButton(true);
    }, 1000);
  
    return () => clearTimeout(timeout);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ backgroundColor: "black" }}>
        <div
          style={{
            margin: "100px auto",
            padding: "0px",
            maxWidth: "360px",
            textAlign: "center",
            position: "relative",
            zIndex: "9999",
            top: "0",
          }}
        >
          <Image src={logo} width="600px" height="400px" alt="name" />
          {showButton ? (
            <Link href="/shop">
              <Button color="success">
              Shop
              </Button>
            </Link>
          ) : (
            <div className={classes.container}>
              <CircularProgress color="secondary" />
            </div>
          )}
        </div>
        <Container maxWidth="lg" component="footer">
          <Box mt={5}>
            <Typography
              variant="body2"
              style={{ color: "white" }}
              align="center"
            >
              © {new Date().getFullYear()} Yuck StreetWear LLC.
            </Typography>
          </Box>
        </Container>
      </div>
    </ThemeProvider>
  );
}
