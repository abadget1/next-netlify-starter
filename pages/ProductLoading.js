import React, { useContext } from "react";  
import { Box, Button, CircularProgress, Grid, LinearProgress, Typography } from '@material-ui/core'
import { Store } from '/components/Store';
import Stack from '@material-ui/lab/';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// import CircularProgress from "@material-ui/core/CircularProgress";

// core components
import {
  infoColor,
  whiteColor,
  title
} from "/styles/jss/nextjs-material-kit-pro.js";
import Logo from '/Users/aaron/next-netlify-starter/images/Logo.png'
import Layout from "@components/Layout";
import { Skeleton } from "@material-ui/lab";
import GridItem from "@components/Grid/GridItem";
import GridContainer from "@components/Grid/GridContainer";
import CardHeader from "@components/Card/CardHeader";
import CardBody from "@components/Card/CardBody";
import Card from "@components/Card/Card";
import CardFooter from "@components/Card/CardFooter";
import { AddShoppingCartSharp } from "@material-ui/icons";
import classNames from "classnames";

const useStyles = makeStyles({
  progress: {
    color: infoColor[0],
    width: "6rem !important",
    height: "6rem !important"
  },
  wrapperDiv: {
    margin: "100px auto",
    padding: "0px",
    maxWidth: "360px",
    textAlign: "center",
    position: "relative",
    zIndex: "9999",
    top: "0"
  },
  iconWrapper: {
    display: "block"
  },
  title: {
    ...title,
    color: whiteColor
  }
});


const ProductLoading = () => {
  const { state, dispatch } = useContext(Store);
  return (
    <div>
        <Grid item xs={12} sm={12} md={6} lg={6}>
            <GridItem>
            {/* <img className={classes.media} src={product.image.url} alt={product.name} /> */}
            <Box sx={{ width: '100%' , bgcolor: "#2B2B2B"}}>                
                <Skeleton 
                animation="wave" 
                height="35vh"
                width="100%"   
                variant="rounded"
                />
            </Box>
            </GridItem>
        </Grid>

      {/* <GridContainer>
      <GridItem lg={4} md={6} sm={12} xs={12} >
          <Box sx={{ width: '100%', bgcolor: "#2B2B2B" }}>                
            <Card product plain>
              <CardHeader image plain>
                <Box sx={{ width: '100%' }}>                
                  <Skeleton 
                    animation="wave" 
                    height="35vh"
                    width="100%"   
                    variant="rounded"
                  />
                </Box>
              </CardHeader>
              <CardBody>
                <Box sx={{ width: '100%'}}>                
                  <Skeleton 
                    animation="wave" 
                    height={"5vh"} 
                    width="70%"   
                    variant="text"  
                    sx={{ bgcolor: 'grey.900' }}
                  />              
                </Box>
                <Box sx={{ width: '100%'}}>                
                  <Skeleton 
                    animation="wave" 
                    height={"5vh"} 
                    width="40%"   
                    variant="text"
                  />              
                </Box>
              </CardBody>
              <CardFooter >
                
              <Box sx={{ width: '100%',  } }>                
                <Skeleton 
                  animation="wave" 
                  height={40} 
                  width="100%"   
                  variant="rectangle"
                  sx={{ bgcolor: 'grey.400' }}
                  style={{ }} 
                />   
                          
              </Box>
              </CardFooter>
            </Card>
          </Box>
      </GridItem>
      </GridContainer> */}
    </div>
  )
}

export default ProductLoading;