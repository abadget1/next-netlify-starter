// /*eslint-disable*/
// @material-ui/core components
import FormControl from "@material-ui/core/FormControl";
import Button from "/components/CustomButtons/Button.js";
// import Typography from "../..Danger"



import React from "react";
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
import { makeStyles } from "@material-ui/styles";
import productStyle from "../../styles/jss/nextjs-material-kit-pro/pages/productStyle.js";
import Layout from '../../components/Layout';
import {commerce} from '../../utils/commerce';
import { useContext, useState } from 'react';
import { Store } from '../../components/Store';
import { CART_RETRIEVE_SUCCESS } from '../../utils/constants';
import Router from 'next/router';

import SwipeableTextMobileStepper from "../../components/SwipeableTextMobileStepper";


import {  Grid, LinearProgress, Typography } from "@material-ui/core";
import GridItem from "../../components/Grid/GridItem";
import GridContainer from "../../components/Grid/GridContainer";
import { Alert } from "@material-ui/lab";
const useStyles = makeStyles(productStyle);

export default function Product(props) {

  
  // Not good practice but it works..
  // const productId = window.location.pathname.slice(10);

  const { product } = props;
  const [quantity, 
    setQuantity
  ] = useState(1);
  const classes = useStyles();
  const { state, dispatch } = useContext(Store);
  const { cart } = state;

  const quantityChangeHandler = async (lineItem, quantity) => {
    const cartData = await commerce.cart.update(lineItem.id, {quantity,});
    dispatch({ type: CART_RETRIEVE_SUCCESS, payload: cartData });
  };

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
          <Layout title={product.name} commercePublicKey={props.commercePublicKey}>
            {(cart.loading || cart === undefined) ? (
              <LinearProgress color="secondary" />
            ) : product === undefined ? (
              <Alert icon={false} severity="error">
                Shop is Closed! Come back later!
              </Alert>
            ) : (
                  <div className={classes.container}>
                    <Grid container spacing={6}>

                      <Grid item xs={12} sm={12} md={6} lg={6}>
                        <GridItem>
                          {/* <img className={classes.media} src={product.image.url} alt={product.name} /> */}
                          <SwipeableTextMobileStepper product={product}/>
                        </GridItem>
                      </Grid>
                      <Grid item xs={12} sm={12} md={6} lg={6}>
                          <Typography className="" variant="h1"><strong>{product.name}</strong></Typography>
                          <Typography className={classes.mainPrice} variant="h3">{product.price.formatted_with_symbol}</Typography>
                          <Typography style={{color: 'gray', justifyItems: 'center'}} variant='p'>
                        {product.description.replace(/<[^>]*>?/gm, '')}
                      </Typography>
                          <GridContainer className={classes.pickSize}>
                          <GridItem md={12} sm={12}>
                            {/* <Select
                              labelId="quanitity-label"
                              id="quanitity"
                              onChange={(e) =>
                                quantityChangeHandler(product.id, e.target.value)
                              }
                              value={1}
                            >
                              {[...Array(10).keys()].map((x) => (
                                <MenuItem key={x + 1} value={x + 1}>
                                  {x + 1}
                                </MenuItem>
                              ))}
                                              <MenuItem
                                    classes={{
                                      root: classes.selectMenuItem,
                                      selected: classes.selectMenuItemSelected
                                    }}
                                    value="0"
                                  ></MenuItem>
                            </Select> */}
                              <label>** Select size at checkout **</label>
                              <br/>
                              <FormControl
                                fullWidth
                                className={classes.selectFormControl}
                                style={{color: "white"}}
                              >
                                {/* <Typography className={classes.mainPrice} variant="h3">Select size at checkout</Typography> */}

                                {/* <Select/ */}
                              </FormControl>
                            </GridItem>
                            {/* <GridItem md={12} sm={12}>
                              <label>Select Size</label>
                              <FormControl
                                fullWidth
                                className={classes.selectFormControl}
                              >
                                <Select
                                  MenuProps={{
                                    className: classes.selectMenu
                                  }}
                                  classes={{
                                    select: classes.select
                                  }}
                                  value={sizeSelect}
                                  onChange={(event) => setSizeSelect(event.target.value)}
                                  inputProps={{
                                    name: "sizeSelect",
                                    id: "size-select"
                                  }}
                                >
                                  <MenuItem
                                    classes={{
                                      root: classes.selectMenuItem,
                                      selected: classes.selectMenuItemSelected
                                    }}
                                    value="0"
                                  >
                                    Small
                                  </MenuItem>
                                  <MenuItem
                                    classes={{
                                      root: classes.selectMenuItem,
                                      selected: classes.selectMenuItemSelected
                                    }}
                                    value="1"
                                  >
                                    Medium
                                  </MenuItem>
                                  <MenuItem
                                    classes={{
                                      root: classes.selectMenuItem,
                                      selected: classes.selectMenuItemSelected
                                    }}
                                    value="2"
                                  >
                                    Large
                                  </MenuItem>
                                </Select>
                              </FormControl>
                            </GridItem> */}
                          </GridContainer>
                          <br/>
                          <GridContainer >
                          <GridItem md={12} sm={12}>
                          <Button variant="contained" color="danger" fullWidth onClick={()=>addToCartHandler(product)}>
                              Add to Cart <AddShoppingCartOutlinedIcon />
                            </Button>
                          </GridItem>
                          </GridContainer>
                          <br/>
                          {/* <GridContainer className={classes.pullLeft}> */}
                          {/* <GridItem md={12} sm={12}>
                            <Button variant="outlined" fullWidth color="primary" href='/'>
                              Back to products
                            </Button>
                          </GridItem> */}

                          {/* </GridContainer> */}
                        {/* <h2 className={classes.title}>{product.name}</h2> */}
                        {/* <Typography variant="p" color="textSecondary">
                          {product.price.formatted_with_symbol}
                        </Typography>
                        <Typography variant="p" paragraph>
                        {product.description.replace(/<[^>]*>?/gm, '')}
                        </Typography> */}
                        {/* <Button variant="contained" color="primary" onClick={addToCartHandler}>
                          Add To Cart
                        </Button> */}
                      </Grid>
                    </Grid>
                  </div>
            )
          }
    </Layout>
    )}
export async function getServerSideProps({ params }) {
  const { id } = params;
  // const commerce = getCommerce();
  const product = await commerce.products.retrieve(id, {
    type: 'permalink',
  });
  return {
    props: {
      product,
    },
  };
}
