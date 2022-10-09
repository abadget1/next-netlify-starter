import React 
// { useEffect, useState, useContext } 
from 'react';
// import Link from 'next/link';
import {
  Button,
  // Card,
  // CircularProgress,
  // Grid,
  // GridItem,
  // List,
  // ListItem,
  MenuItem,
  Select,
  // Slide,
  // Table,
  // TableBody,
  TableCell,
  // TableContainer,
  // TableHead,
  TableRow,
  // Typography,
} from '@material-ui/core';
// import dynamic from 'next/dynamic';
// import { Alert } from '@material-ui/lab';
// import Layout from '../components/Layout';
// import { commerce } from '../utils/commerce';
// import { useStyles } from '../utils/styles';
// import classNames from "classnames";
// import { Store } from '../components/Store';
// import { CART_RETRIEVE_SUCCESS } from '../utils/constants';
// import Router from 'next/router';

const checkoutItem = () => {
  return (
    <>
    {/* <TableRow key={cartItem.id} >
    <TableCell component="th" scope="row">
        <img
          src={cartItem.image.url}
          alt={cartItem.name}
          height="200vh"
          width="auto"
        />
    </TableCell>
    <TableCell align="center">
      <h4>{product.price.formatted * product.quantity}</h4>
    </TableCell>
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
      <h4>{cartItem.price.formatted_with_symbol}</h4>
    </TableCell>
    <TableCell align="center">
      <Button
        onClick={() => removeFromCartHandler(cartItem)}
        variant=""
        color="rose"
      >
        x
      </Button>
    </TableCell>
  </TableRow> */}
  </>
    )
}

export default checkoutItem