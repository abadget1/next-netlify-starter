import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "../components/Grid/GridContainer";
import GridItem from "../components/Grid/GridItem.js";
// import Card from "../components/Card/Card.js";

import carouselStyle from "/styles/jss/nextjs-material-kit-pro/pages/componentsSections/carouselStyle.js";
// import {pic} from "/Users/aaron/coolshop/assets/img/jacket-3.jpg"
const useStyles = makeStyles(carouselStyle);

export default function SectionCarousel(props) {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  const productImages = props.product.assets

  
  return (
    <div className={classes.section} id="carousel">
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={10} md={8} className={classes.marginAuto}>
              <Carousel {...settings}>
                {productImages && productImages.map(img => {
                  <>
                  <div>
                  <img
                    src={img.url}
                    alt="..."
                    className="slick-image"
                  />

                </div>    
                  </>
                  
                })}

              </Carousel>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
