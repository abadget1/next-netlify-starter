import React from "react";
// react component for creating beautiful carousel
import { CCarousel, CCarouselItem, CImage } from '@coreui/react'
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// import LocationOn from "@material-ui/icons/LocationOn";
// core components
import carouselStyle from "/styles/jss/nextjs-material-kit-pro/pages/componentsSections/carouselStyle.js";
// import {pic} from "/Users/aaron/coolshop/assets/img/jacket-3.jpg"
const useStyles = makeStyles(carouselStyle);

export default function SectionCarousel(props) {
  const classes = useStyles();


  const productImages = props.product.assets

  // const getImages = () => {
    
  // }
  
  return (
    <>
    <div className={classes.marginAuto}>
      
      <CCarousel  transition="crossfade">
        <CCarouselItem>
          <CImage style={{maxWidth: '75%'}} src="https://cdn.chec.io/merchants/47558/assets/5Khef24FC7NHuP1Z|Screen Shot 2022-10-08 at 2.33.21 PM.png" alt="name" />
        </CCarouselItem>
        <CCarouselItem>
          <CImage style={{maxWidth: '75%'}} src="https://cdn.chec.io/merchants/47558/assets/fX6KvTALl3X0735h|Screen Shot 2022-10-08 at 2.33.01 PM.png" alt="name" />
        </CCarouselItem>
        <CCarouselItem>
          <CImage style={{maxWidth: '75%'}} src="https://cdn.chec.io/merchants/47558/assets/HwQysALkoB7r9Ppr|Screen Shot 2022-10-08 at 2.33.35 PM.png" alt="name" />
        </CCarouselItem>
      </CCarousel>
    </div>
    </>
  );
}
