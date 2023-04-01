import React, { useEffect, } from 'react';
import Link from 'next/link';

// nodejs library that concatenates classes
import classNames from "classnames";


// // core components


import GridItem from "../components/Grid/GridItem.js";
import Card from "../components/Card/Card";
import CardHeader from "../components/Card/CardHeader.js";
import CardBody from "../components/Card/CardBody.js";
import CardFooter from "../components/Card/CardFooter.js";
import { Grid, makeStyles, Typography } from '@material-ui/core';
import styles from "../styles/jss/nextjs-material-kit-pro/pages/ecommerceSections/productsStyle";
import Image from 'next/image.js';



export default function Product({ id, permalink, name, price, description, image }) {
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  return (
    <>
      <Grid item lg={4} md={6} sm={12} xs={12} key={permalink}>
        <GridItem >
          <Card product plain>
            <Link href={`/products/${permalink}`}>
              <CardHeader image plain>
                  <div style={{ height: '600px' }}>
                      <img src={image.url} alt="..." height='100%' style={{objectFit: "cover"}}/>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        opacity: 1
                      }}
                    />
                    </div>
              </CardHeader>
            </Link>
            <CardBody className={classes.textCenter} plain>
            <Typography style={{color: 'white'}} variant='h4'component="h2"><strong>{name}</strong></Typography>
            </CardBody>
            <CardFooter plain>
              <div className={classes.priceContainer}>
                <span className={classNames(classes.price, classes.priceOld)}>
                  {" "}
                </span>
                <span className={classNames(classes.price, classes.priceOld)} >
                  {" "}
                  <strong style={{color: 'white'}}>{price.formatted_with_symbol}</strong>
                </span>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </Grid>
    </>
  );
}
