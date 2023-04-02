import { Box, Grid } from '@material-ui/core'
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
        <Grid item md={12} sm={12} xs={12} style={{padding: "1% 8% 1% 8%"}}>
        <Box bgcolor="#2B2B2B" padding="2%">
            <Skeleton animation="wave" variant="text" height={40} width={"80%"} />
        </Box> 
        <Box bgcolor="#2B2B2B" padding="2%">
            <Skeleton animation="wave" variant="rect" height={130} style={{ marginBottom: '1rem' }} />

        </Box>
</Grid>
        
        </>
    )
}

export default CartLoading