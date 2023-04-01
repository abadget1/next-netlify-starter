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
import { Alert } from '@material-ui/lab';
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
import { makeStyles } from '@material-ui/core';
import styles from "/styles/jss/nextjs-material-kit-pro/pages/ecommerceSections/productsStyle.js";

// import Tooltip from "@material-ui/core/Tooltip";
import { Box, LinearProgress, Step, StepButton, Stepper, Typography } from '@material-ui/core';

import { useContext, useState } from 'react';
// import { useStyles } from '../../utils/styles';
import { Store } from '/components/Store';
import { CART_RETRIEVE_SUCCESS } from '/utils/constants';
import Router from 'next/router';

import { useStyles } from '/utils/styles';
import useSound from 'use-sound';
import track from '/public/assets/musictrack.mp3';
import { PauseCircleFilled, PlayCircleFilled, StopOutlined } from '@material-ui/icons';
import ProductList from '@components/ProductList';



export default function Shop(props) {
  const useStyles = makeStyles(styles);
  const { products } = props;
  const classes = useStyles();
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const [playing, setPlaying] = useState(false);


  const addToCartHandler = async (product) => {
    const lineItem = cart.data.line_items.find(
      (x) => x.product_id === product.id
    );

    if (lineItem) {
      const cartData = await commerce.cart.add(product.id);
      dispatch({ type: CART_RETRIEVE_SUCCESS, payload: cartData});
      Router.push('/cart');
    } else {
      const cartData = await commerce.cart.add(product.id);
      dispatch({ type: CART_RETRIEVE_SUCCESS, payload: cartData });
      Router.push('/cart');
    }
  };
  const [play, exposedData] = useSound('/assets/musictrack.mp3', {
    // `interrupt` ensures that if the sound starts again before it's
    // ended, it will truncate it. Otherwise, the sound can overlap.
    interrupt: true,
  });
  const pause = () => {exposedData.stop()};

  const muteButton = () => {

    if(playing === true){
      pause();
      setPlaying(false); 
    }

    if(playing === false){
      play()
      setPlaying(true); 
    }
  }


  return (
    <Layout title="Shop" commercePublicKey={props.commercePublicKey}>
        <ProductList products={props.products} />
        <div>
            <div style={{
                      display:"flex",
                      justifyContent:"center",
                      alignItems:"center",
                      width:"3.25rem",
                      height:"3.25rem",
                      bgColor:"white",
                      shadow:"sm",
                      borderRadius:"50%",
                      position:"fixed",
                      right:"4rem",
                      bottom:"2rem",
                      color:"dark"}}
            >
              <Button simple onClick={muteButton}>
                {!playing ? (
                  <>
                    <Typography variant="body1" component="body1"style={{marginLeft: 0}}>
                      <strong>Play</strong>
                    </Typography>
                    <PlayCircleFilled/>
                  </>
                ) : (
                  <>
                  <Typography variant="body1" component="body1"style={{marginLeft: 0}}>
                    <strong>Pause</strong>
                  </Typography>
                  <PauseCircleFilled/>
                </>
                )}
              </Button>

            </div>
        </div>
    </Layout>
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
