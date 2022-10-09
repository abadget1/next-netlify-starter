import React from 'react';
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
import { makeStyles } from '@material-ui/styles';
import styles from "/styles/jss/nextjs-material-kit-pro/pages/ecommerceSections/productsStyle.js";

// import Tooltip from "@material-ui/core/Tooltip";
import { LinearProgress, Typography } from '@material-ui/core';

import { useContext, useState } from 'react';
// import { useStyles } from '../../utils/styles';
import { Store } from '/components/Store';
import { CART_RETRIEVE_SUCCESS } from '/utils/constants';
import Router from 'next/router';

export default function Home(props) {
  const useStyles = makeStyles(styles);

  const { products } = props;
  const [quantity, setQuantity] = useState(1);

  const classes = useStyles();

  const { state, dispatch } = useContext(Store);
  const { cart } = state;

  const addToCartHandler = async (product) => {
    // const commerce = getCommerce(props.commercePublicKey);
    const lineItem = cart.data.line_items.find(
      (x) => x.product_id === product.id
    );

    if (lineItem) {
      const cartData = await commerce.cart.update(lineItem.id, {
        quantity: quantity,
      });
      // const getCartData = async() =>{return cartData}
      dispatch({ type: CART_RETRIEVE_SUCCESS, payload: cartData});
      Router.push('/cart');
    } else {
      const cartData = await commerce.cart.add(product.id, quantity);
      dispatch({ type: CART_RETRIEVE_SUCCESS, payload: cartData });
      Router.push('/cart');
    }
  };
  return (
    <Layout title="Shop" commercePublicKey={props.commercePublicKey}>
      {(cart.loading || cart === undefined) ? (
        <LinearProgress color="secondary" />
      ) : products.length === 0 ? (
        <Alert icon={false} severity="error">
          Come Back Later, Shop is closed.
        </Alert>
      ) : (
      <div className={classes.container}>
      <div >
        {/* <h2>Just</h2> */}
        <GridContainer>
        {products && products.map((product) => 
          <GridItem md={4} sm={4} key={product.id}>
            <Card product  plain>
              <CardHeader image plain>
                <a href={`/products/${product.permalink}`}>
                  <img src={product.image.url} alt="..." height='50%'/>
                </a>
                <div
                  className={classes.coloredShadow}
                  style={{
                    backgroundImage: "url('/img/examples/gucci.jpg')",
                    opacity: 1
                  }}
                />
              </CardHeader>
              <CardBody className={classes.textCenter} plain>
                <Typography  variant='h2'style={{color: 'white', marginLeft: '25%'}} component="h2"><strong>{product.name}</strong></Typography>
                <Typography style={{color: 'gray', justifyItems: 'center'}} variant='p'>
                  {product.description.replace(/<[^>]*>?/gm, '')}
                </Typography>
              </CardBody>
              <CardFooter plain>
                <div className={classes.priceContainer}>
                  <span className={classNames(classes.price, classes.priceOld)}>
                    {" "}
                    {/* ${product.price.formatted - 10.00} */}
                  </span>
                  <span className={classNames(classes.price, classes.priceOld)} style={{color: "white"}}>
                    {" "}
                    <strong>${product.price.formatted}</strong>
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
    </div>      
      )}
      {/* <div className={classes.container}>
      <GridContainer> 
        {products && products.map((product) =>(
        <GridItem lg={9} md={7} sm={12} xs={12}>
          <Link href={`/products/${product.permalink}`}>
          <Card plain product>
            <CardHeader  image style={{height: '75%'}}>
              <a href={`/products/${product.permalink}`}>
                <img src={product.image.url} alt=".." className={classes.largeImage}/>
              </a>
            </CardHeader>
            <CardBody plain>
              <a href={`/products/${product.permalink}`}>
                <h3 className="" style={{color: 'white'}}>{product.name}</h3>
              </a>
              <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" style={{color: 'white'}}component="h4" />
            </CardBody>
            <CardFooter plain className={classes.justifyContentBetween}>
              <div className={classes.priceContainer}>
                <span className={classes.price}><h2>{product.name}</h2></span>
              </div>
              <div className={classNames(classes.stats, classes.mlAuto)}>
              <Button simple color="danger">
                <AddShoppingCartSharp/> 
              </Button>
              
          </div>
            </CardFooter>
          </Card>
          </Link>
        </GridItem>
        ))}
      </GridContainer>
      </div> */}
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
