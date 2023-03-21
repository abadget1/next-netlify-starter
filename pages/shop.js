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
import Loading from './ShopLoading';
import { useStyles } from '/utils/styles';
import useSound from 'use-sound';
import track from '/public/assets/musictrack.mp3';
import { PauseCircleFilled, PlayCircleFilled, StopOutlined } from '@material-ui/icons';



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
      {(cart.loading || cart === undefined) ? (
        <div className={classes.container}>
          <Loading/>      
        </div>
      ) : products.length === 0 ? (
        <Alert icon={false} severity="error">
          Come Back Later, Shop is closed.
        </Alert>
      ) : (
      <div className={classes.container}>
        <div>
          <GridContainer>
          {products && products.map((product) => 
            <GridItem lg={4} md={6} sm={12} xs={12} key={product.permalink}>
              <Card product plain>
                <CardHeader image plain>
                  <a href={`/products/${product.permalink}`} >
                    <img src={product.image.url} alt="..." height='50%'/>
                  </a>
                  <div
                    className={classes.coloredShadow}
                    style={{
                      opacity: 1
                    }}
                  />
                </CardHeader>
                <CardBody className={classes.textCenter} plain>
                  <Typography  variant='h2'style={{color: 'white'}} component="h2"><strong>{product.name}</strong></Typography>
                  <Typography style={{color: 'gray', justifyItems: 'center'}} variant='body2'>
                    {product.description.replace(/<[^>]*>?/gm, '')}
                  </Typography>
                </CardBody>
                <CardFooter plain>
                  <div className={classes.priceContainer}>
                    <span className={classNames(classes.price, classes.priceOld)}>
                      {" "}
                    </span>
                    <span className={classNames(classes.price, classes.priceOld)} style={{color: "white"}}>
                      {" "}
                      <strong>{product.price.formatted_with_symbol}</strong>
                    </span>
                  </div>
                  <div className={classNames(classes.stats, classes.mlAuto)}>
                      <Button color="danger" onClick={()=>addToCartHandler(product)}>
                        <AddShoppingCartSharp /> Add To Cart
                      </Button>
                  </div>
                </CardFooter>
              </Card>
            </GridItem>
          )}
          </GridContainer>
          </div>
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
      </div>      
      )}
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
