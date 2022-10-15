import CardBody from '@components/Card/CardBody'
import CardFooter from '@components/Card/CardFooter'
import CardHeader from '@components/Card/CardHeader'
import GridContainer from '@components/Grid/GridContainer'
import GridItem from '@components/Grid/GridItem'
import { Box, Card, Grid, Typography } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'
import React from 'react'
import { useStyles } from 'utils/styles'

const CartLoading = () => {
    const classes = useStyles();

  return (
        <>
        <br/>
        <br/>
        <br/>
            <Grid item md={12} sm={12} xs={12} style={{padding: "1% 8% 2% 8%"}}>
            <Box bgcolor={"#2B2B2B"}>
                    <Skeleton animation="wave" variant="text"  height={40} width={"60%"} />
                </Box> 
                <Box bgcolor={"#2B2B2B"}>
                    <Skeleton animation="wave" variant="rect"  height={400} />
                </Box>
            </Grid>          
        </>
    )
}

export default CartLoading