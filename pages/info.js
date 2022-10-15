import Layout from '@components/Layout';
import { Card, Typography } from '@material-ui/core'
import classNames from 'classnames';
import Image from 'next/image';
import React from 'react'
import { useStyles } from 'utils/styles';
import logo from '/images/logo-sm.png'
const info = () => {
  const classes = useStyles();
  return (
    <>
    <Layout title="Info">
      <div className={classes.container}>
        <div>
          {/* <Card className={classes.card} style={{padding: "10%", backgroundColor: "#f0f0f0"}}> */}
            <Typography 
            variant="h1" 
            component="h1" 
            style={{
              color: "white", 
              textAlign:"center"}}
            >
              All Sales Are Final.
            </Typography>
            <Typography 
              variant="h1" 
              component="h1" 
              style={{
                color: "white",
                textAlign:"center"}}
              >
                No Returns. 
            </Typography>   
            <Typography 
              variant="h1" 
              component="h1" 
              style={{color: "white",
              textAlign:"center"}}
              >
                No Exchanges.
            </Typography>   
            {/* <div style={{textAlign:"center"}}>
              <Image src={logo} alt="..." height="100%" width="100%"/>
            </div> */}
          {/* </Card> */}
        </div>
      </div>
    </Layout>
    </>

  )
}

export default info;