/*eslint-disable*/
import Button from "/components/CustomButtons/Button.js";



import React, { useContext } from 'react';
import Link from 'next/link';
import {
  FormControl,
  Grid,
  InputBase,
  InputLabel,
  NativeSelect,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
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
import { LinkOffTwoTone } from "@material-ui/icons";
import OrderSummary from "@components/OrderSummary";


function Cart(props) {
  const classes = useStyles();
  const { state, dispatch } = useContext(Store);
  const  cart  = state.cart;


  const removeFromCartHandler = async (lineItem) => {
    const cartData = await commerce.cart.remove(lineItem.id);
    dispatch({ type: CART_RETRIEVE_SUCCESS, payload: cartData });
  };

  const quantityChangeHandler = async (lineItem, quantity) => {
    const cartData = await commerce.cart.update(lineItem.id, {quantity});
    dispatch({ type: CART_RETRIEVE_SUCCESS, payload: cartData });
  };

  const proccessToCheckoutHandler = () => {
    Router.push('/checkout');
  };


  const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: "#262626",
      // border: '2px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      color: "white",
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }));


  return (
    <Layout title="Cart" commercePublicKey={props.commercePublicKey}>
      {cart.data ? (
        cart.data.line_items.length === 0 ? (
          <Alert icon={false} severity="error">
            Your cart is empty. <Link href="/shop">Go shopping</Link>
          </Alert>
        ) : (
          <React.Fragment>
          <Typography variant="h2" component="h2" style={{color: "white", padding: "0% 0% 0% 5%"}}>
            Your Cart
          </Typography>
          <div style={{ display: 'flex' }}>
            <Grid container >
              <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                <TableContainer>
                  <Table aria-label="Orders" size="large" stickyHeader="true" >

                    <TableBody >
                      {cart.data.line_items.map((cartItem) => (
                        <TableRow key={cartItem.id} style={{color:"white", border: 0, align: "center" }}>
                          <TableCell component="th" scope="row" align="right" style={{color:"white", border: 0}}>
                            <Link href={`products/${cartItem.permalink}`}>
                              <img
                                src={cartItem.image.url}
                                alt={cartItem.name}
                                height="150vh"
                                width="125vh"
                              />
                            </Link>
                          </TableCell>
                          <TableCell component="th" scope="row" style={{color:"white", border: 0}}>
                              <Typography variant="p" component="p" style={{color: "white"}}>
                                <strong>{cartItem.name}</strong>
                              </Typography>
                              {(cartItem.selected_options.length > 0) ? (
                                <Typography variant="p" component="p" style={{color: "white"}}>
                                {cartItem.selected_options[0].option_name}
                              </Typography>) : (<Typography variant="p" component="p" style={{color: "white"}}>
                                One Size
                              </Typography>)}

                              <Button
                              onClick={() => removeFromCartHandler(cartItem)}
                              variant="filled"
                              color="danger"
                              size="sm"
                              >
                              remove
                            </Button>
                          </TableCell>
                          <TableCell align="center" style={{color:"white", border: 0}}>
                            <h4>{cartItem.price.formatted_with_symbol}</h4>                          </TableCell>
                          <TableCell align="center" style={{color:"white", border: 0}}>
                            <FormControl sx={{ m: 1 }} variant="standard">
                              <InputLabel htmlFor="demo-customized-select-native">Quantity</InputLabel>
                              <NativeSelect
                                id="demo-customized-select-native"
                                value={cartItem.quantity}
                                onChange={(e) =>
                                  quantityChangeHandler(cartItem, e.target.value)
                                }
                                input={<BootstrapInput />}
                              >
                                <option aria-label="None" value="" />
                                <option value={cartItem.quantity}>{cartItem.quantity}</option>
                                <option value={cartItem.quantity+1}>{cartItem.quantity+1}</option>
                                <option value={cartItem.quantity+2}>{cartItem.quantity+2}</option>

                              </NativeSelect>
                            </FormControl>
                          </TableCell>
                          <TableCell align="center" style={{color:"white", border: 0}}>
                            <h4>${cartItem.price.formatted * cartItem.quantity}</h4>
                          </TableCell>
                    
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>

            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <div style={{   
              display: 'flex',
              padding: "3%"
            }}>

              <OrderSummary 
                subtotal={cart.data.subtotal.formatted_with_symbol} 
                checkoutURL={cart.data.hosted_checkout_url}/>
              </div>
            </Grid>
              </Grid>
            </div>
          </React.Fragment>
            )
          ) : (
            <CartLoading />
          )}
          </Layout>
        );
}
export default dynamic(() => Promise.resolve(Cart), {
  ssr: false,
});

