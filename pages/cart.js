/*eslint-disable*/
import Button from "/components/CustomButtons/Button.js";

import CardBody from "/components/Card/CardBody.js";

import React, { useEffect, useState, useContext } from 'react';
import Link from 'next/link';
import {

  Card,
  CircularProgress,
  Grid,
  GridItem,
  LinearProgress,
  List,
  ListItem,
  MenuItem,
  Select,
  Slide,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';
import dynamic from 'next/dynamic';
import { Alert } from '@material-ui/lab';
import Layout from '../components/Layout';
import { commerce } from '../utils/commerce';
import { useStyles } from '/utils/styles';
import classNames from "classnames";
import { Store } from '../components/Store';
import { CART_RETRIEVE_SUCCESS } from '../utils/constants';
import Router from 'next/router';
import CartLoading from "./CartLoading";


function Cart(props) {
  const classes = useStyles();
  const { state, dispatch } = useContext(Store);
  const { cart } = state;

  const removeFromCartHandler = async (lineItem) => {
    const cartData = await commerce.cart.remove(lineItem.id);
    dispatch({ type: CART_RETRIEVE_SUCCESS, payload: cartData });
  };

  const quantityChangeHandler = async (lineItem, quantity) => {
    const cartData = await commerce.cart.update(lineItem.id, {quantity,});
    dispatch({ type: CART_RETRIEVE_SUCCESS, payload: cartData });
  };

  const proccessToCheckoutHandler = () => {
    Router.push('/checkout');
  };


  return (
    <Layout title="Cart" commercePublicKey={props.commercePublicKey}>
      {(cart.loading || cart === undefined) ? (
      <>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <CartLoading/>
        </div>
      </>
      ) : cart.data.line_items.length === 0 ? (
        <Alert icon={false} severity="error">
          Cart is empty. <Link href="/">Go shopping</Link>
        </Alert>
      ) : (
        <React.Fragment>
          <div className={classNames(classes.main, classes.mainRaised)}>
          {/* <CartLoading/> */}

            <Grid container spacing={3} >
              <Typography variant="h3" component="h3" 
              // style={{paddingLeft: '3%', color: "white"}}
              style={{color: "white", padding: "2% 10%"}}
              >
                Shopping Cart
              </Typography>
              {/* <Slide direction="up" in={true}> */}
              <Grid item md={12} sm={12} xs={12}
              style={{padding: "2% 10% 10% 10%"}}
              >
                <Card className={classes.card} style={{padding: "4%", backgroundColor: "#"}}>
                <TableContainer>
                  <Table aria-label="Orders" size="small" >
                    <TableHead>
                      <TableRow>
                        <TableCell>Product</TableCell>
                        <TableCell align="center">Price</TableCell>
                        <TableCell align="center">Quantity</TableCell>
                        <TableCell align="center">Total</TableCell>
                        <TableCell align="center">Remove</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {cart.data.line_items.map((cartItem) => (
                        <TableRow key={cartItem.id} >
                          <TableCell component="th" scope="row">
                            <a href={`products/${cartItem.permalink}`}>
                              <img
                                src={cartItem.image.url}
                                alt={cartItem.name}
                                height="200vh"
                                width="auto"
                              />
                              </a>
                          </TableCell>
                          <TableCell align="center">
                            <h4>${cartItem.price.raw}</h4>                          </TableCell>
                          <TableCell align="center">
                            <Select
                              labelId="quanitity-label"
                              id="quanitity"
                              onChange={(e) =>
                                quantityChangeHandler(cartItem, e.target.value)
                              }
                              value={cartItem.quantity}
                            >
                              {[...Array(10).keys()].map((x) => (
                                <MenuItem key={x + 1} value={x + 1}>
                                  {x + 1}
                                </MenuItem>
                              ))}
                            </Select>
                          </TableCell>
                          <TableCell align="center">
                            <h4>${cartItem.price.formatted * cartItem.quantity}</h4>
                          </TableCell>
                          <TableCell align="center">
                            <Button
                              onClick={() => removeFromCartHandler(cartItem)}
                              variant=""
                              // color=""
                            >
                              x
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                <List>
                    <ListItem>
                      <Grid container>
                        <Typography variant="h6">
                          Subtotal: {cart.data.subtotal.formatted_with_symbol}
                        </Typography>
                      </Grid>
                    </ListItem>
                    <ListItem>
                      {cart.data.total_items > 0 && (
                        <Button
                          type="button"
                          fullWidth
                          variant="contained"
                          color="danger"
                          // onClick={proccessToCheckoutHandler}
                          href={cart.data.hosted_checkout_url}
                        >
                          Proceed to checkout
                        </Button>
                      )}
                    </ListItem>
                  </List>
                </Card>
              </Grid>
              {/* </Slide> */}
            </Grid>
            </div>
        </React.Fragment>
      )}
    </Layout>
  );
}

export default dynamic(() => Promise.resolve(Cart), {
  ssr: false,
});
