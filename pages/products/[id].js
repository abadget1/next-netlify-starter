// /*eslint-disable*/
// @material-ui/core components
import FormControl from "@material-ui/core/FormControl";
import Button from "/components/CustomButtons/Button.js";
// import Typography from "../..Danger"



import React from "react";
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';

import productStyle from "../../styles/jss/nextjs-material-kit-pro/pages/productStyle.js";
import Layout from '../../components/Layout';
import {commerce} from '../../utils/commerce';
import { useContext, useState } from 'react';
import { Store } from '../../components/Store';
import { CART_RETRIEVE_SUCCESS } from '../../utils/constants';
import Router from 'next/router';

import SwipeableTextMobileStepper from "../../components/SwipeableTextMobileStepper";


import {  Grid, Typography, makeStyles, Select, MenuItem, InputLabel, TextField } from "@material-ui/core";
import GridItem from "../../components/Grid/GridItem";
import GridContainer from "../../components/Grid/GridContainer";
import { Alert } from "@material-ui/lab";
import Link from "next/link.js";

const useStyles = makeStyles(productStyle);

export default function Product(props) {
  const { product } = props;
  const { variant } = props;
  const [quantity, setQuantity] = useState(1);
  const classes = useStyles();
  const { state, dispatch } = useContext(Store);
  const { cart } = state;

  const [size, setSize] = useState( ()=> {
    if (product.variant_groups.length > 0){
    return product.variant_groups[0].options
  }
  return []});
  const [sized, setSized] = useState(()=> {
    if (product.variant_groups.length > 0){
    return product.variant_groups[0].options[0].id
  }
  return []});
  const [color, setColor] = useState(["", "White", "Green", "Blue"]);


  
  const getVar = () => {
    if (product.variant_groups.length > 0){
      return product.variant_groups[0].options
    }
    return []
  }
  const getSizes = () => {
    let sizes = [];
    try {
      product.variant_groups[0].options.map((option) => {
        sizes.push([option.id, option.name]);
      });
    } catch (error) {

    }
    return sizes;
    }

  const quantityChangeHandler = async (lineItem, quantity) => {
    const cartData = await commerce.cart.update(lineItem.id, {quantity});
    // console.log(cart)
    dispatch({ type: CART_RETRIEVE_SUCCESS, payload: cartData });
  };


  const emptyCart = async () => {
    await commerce.cart.empty().then((response) => console.log(response));
  }

  // console.log(size, sized)





  const handleColorChange = (event) => {
    setColor(event.target.value);
  };
  
  const handleSizeChange = (event) => {
    setSize(event.target.value);
    setSized(event.target.value);

  };



    const getColors = () => {
      let colors = [];
      try {
        product.variant_groups[1].options.map((option) => {
          colors.push([option.id, option.name]);
        });
      } catch (error) {
        // console.log("No Colors uploaded.");
      }
      return colors;
      }
      const colors = getColors();

      const sizes = getSizes();

      // add to cart
      const addToCartHandler = async () => {

        if (product.variant_groups.length > 0){
        const variantId = product.variant_groups[0].id // size id
        let sz = [];
        sizes.forEach((object) => {
          if(object[0] === sized){
            sz.push(object[0])
        }
      })
        const variantData = {};
        variantData[variantId.toString()] = sz.toString();

        const cart  = await commerce.cart.add(product.id, quantity, variantData);
        dispatch({ type: CART_RETRIEVE_SUCCESS, payload: cart });
    }
    else {
      const cart  = await commerce.cart.add(product.id, quantity);
      dispatch({ type: CART_RETRIEVE_SUCCESS, payload: cart });
    }

      };
  

// emptyCart()

    return (
          <Layout title={product.name} commercePublicKey={props.commercePublicKey}>
            {product === undefined ? (
                <Alert icon={false} severity="error">
                  Shop is Closed! Come back later!
                </Alert>
            ) : (
              <>
                <div className={classes.container}>
                  <Grid container spacing={6}>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                      <GridItem>
                        <SwipeableTextMobileStepper product={product}/>
                      </GridItem>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Typography className="" variant="h1"><strong>{product.name}</strong></Typography>
                        <Typography className={classes.mainPrice} variant="h3">{product.price.formatted_with_symbol}</Typography>
                        <Typography style={{color: 'gray', justifyItems: 'center'}} variant='body2'>
                        {product.description.replace(/<[^>]*>?/gm, '')}
                      </Typography>
                        <GridContainer className={classes.pickSize}>
                        {colors.length > 0 && product.variant_groups[0].options.length > 0 && 
                          <GridItem md={6} sm={12} >
                          <TextField
                              id="outlined-select-currency-native"
                              fullWidth
                              select
                              label="color"
                              value={color}
                              onChange={handleColorChange}
                              SelectProps={{
                                native: true,
                                MenuProps: {
                                  className: classes.menu,
                                },
                                inputProps: {
                                  style: { color: 'white' }
                                }
                              }}
                              style={{ border: '0px solid #262626', backgroundColor: "#262626", borderRadius: '3px' }}
                              InputLabelProps={{ style: { color: 'white' } }} // sets color of input label to white
                              margin="normal"
                              variant="filled"
                            >
                              {colors.map((option) => (
                                <option key={option} value={option}>
                                  {option}
                                </option>
                              ))}
                            </TextField>
                          </GridItem>
                        }
                          <GridItem md={12} sm={12} >
                            {sizes.length > 0 ? (
                              <TextField
                              id="outlined-select-currency-native"
                              select
                              fullWidth
                              label="size"
                              value={size}
                              onChange={handleSizeChange}
                              SelectProps={{
                                native: true,
                                MenuProps: {
                                  className: classes.menu,
                                },
                                inputProps: {
                                  style: { color: 'white' }
                                }
                              }}
                              margin="normal"
                              variant="filled"
                              style={{ border: '0px solid #262626', backgroundColor: "#262626", borderRadius: '3px' }}
                              inputProps={{ style: { color: 'white' } }}  // sets color of text to white
                              InputLabelProps={{ style: { color: 'white' } }} // sets color of input label to white
                            >
                              {sizes.map((option) => (
                                <option
                                  key={option[0]}
                                  value={option[0]}
                                >
                                  {option[1]}
                                </option>
                              ))}
                            </TextField>
                            ) : (<></>)}
                          </GridItem>
                        </GridContainer>
                        <br/>
                        <GridContainer >
                        <GridItem md={12} sm={12}>
                        <Button variant="contained" color="danger" fullWidth onClick={()=>addToCartHandler(product)}>
                            Add to Cart
                          </Button>
                        </GridItem>
                        </GridContainer>
                        <br/>
                        <GridContainer className={classes.pullLeft}>
                        <GridItem md={12} sm={12}>
                          <Link href="/shop">
                            <Button variant="outlined" fullWidth color="transparent" >
                              Back to products
                            </Button>
                          </Link>
                        </GridItem>

                        </GridContainer>
                    </Grid>
                  </Grid>
                </div>
              </>
            )
          }
          </Layout>
    )

  }
    
export async function getServerSideProps({ params }) {
  const { id } = params;
  // const commerce = getCommerce();
  const product = await commerce.products.retrieve(id, {
    type: 'permalink',
  });
  const variant = await commerce.products.getVariants(product.id, {
    type: 'permalink',
  })
  
  
  return {
    props: {
      product,
      variant
    },
  };
}
