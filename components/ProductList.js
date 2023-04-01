import React from 'react';
// import Tooltip from "@material-ui/core/Tooltip";
import { Grid, makeStyles } from '@material-ui/core';


import styles from "../styles/jss/nextjs-material-kit-pro/pages/ecommerceSections/productsStyle";


import Product from "./Product";
import GridContainer from './Grid/GridContainer';
import { useStyles } from 'utils/styles.js';

export default function ProductList({ products }) {
  if (!products) return null;
  const classes = useStyles();


  return (
    <div className={classes.container}>
      <Grid container spacing={2}>
        {products && products.map((product) => <Product {...product}/>)}
      </Grid>
    </div>
  );
}
