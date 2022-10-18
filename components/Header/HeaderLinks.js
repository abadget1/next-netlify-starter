/* eslint-disable */
import React, { useContext, useEffect } from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// react components for routing our app without refresh
import Link from "next/link";
import badgeStyle from "../../styles/jss/nextjs-material-kit-pro/components/badgeStyle";


import {
  CART_RETRIEVE_REQUEST,
  CART_RETRIEVE_SUCCESS,
} from '../../utils/constants';
import { Store } from '../../components/Store';
import {commerce} from '../../utils/commerce';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";
import Hidden from "@material-ui/core/Hidden";

// @material-ui/core icons
import Email from "@material-ui/icons/Email";
import Face from "@material-ui/icons/Face";
import Settings from "@material-ui/icons/Settings";


// @material-ui/icons
import Apps from "@material-ui/icons/Apps";
import ShoppingCartSharp from "@material-ui/icons/ShoppingCartSharp";
import ViewDay from "@material-ui/icons/ViewDay";
import Dns from "@material-ui/icons/Dns";
import Build from "@material-ui/icons/Build";
import ListIcon from "@material-ui/icons/List";
import People from "@material-ui/icons/People";
import Assignment from "@material-ui/icons/Assignment";
import MonetizationOn from "@material-ui/icons/MonetizationOn";
import Chat from "@material-ui/icons/Chat";
import Call from "@material-ui/icons/Call";
import ViewCarousel from "@material-ui/icons/ViewCarousel";
import AccountBalance from "@material-ui/icons/AccountBalance";
import ArtTrack from "@material-ui/icons/ArtTrack";
import ViewQuilt from "@material-ui/icons/ViewQuilt";
import LocationOn from "@material-ui/icons/LocationOn";
import Fingerprint from "@material-ui/icons/Fingerprint";
import AttachMoney from "@material-ui/icons/AttachMoney";
// import Store from "@material-ui/icons/Store";
import AccountCircle from "@material-ui/icons/AccountCircle";
import PersonAdd from "@material-ui/icons/PersonAdd";
import Layers from "@material-ui/icons/Layers";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import LineStyle from "@material-ui/icons/LineStyle";
import Error from "@material-ui/icons/Error";

// core components
import CustomDropdown from "/components/CustomDropdown/CustomDropdown.js";
import Button from "/components/CustomButtons/Button.js";

import styles from "/styles/jss/nextjs-material-kit-pro/components/headerLinksStyle.js";
import { Badge, Typography } from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;

  useEffect(() => {
    const fetchCart = async () => {
      // const commerce = getCommerce(commercePublicKey);
      dispatch({ type: CART_RETRIEVE_REQUEST });
      await commerce.cart.retrieve().then(
        (resp) => {
          dispatch({ type: CART_RETRIEVE_SUCCESS, payload: resp });
        }
      );
    };
    fetchCart();
  }, []);

  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  const smoothScroll = (e, target) => {
    if (window.location.pathname === "/sections") {
      var isMobile = navigator.userAgent.match(
        /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
      );
      if (isMobile) {
        // if we are on mobile device the scroll into view will be managed by the browser
      } else {
        e.preventDefault();
        var targetScroll = document.getElementById(target);
        scrollGo(document.documentElement, targetScroll.offsetTop, 1250);
      }
    }
  };
  const scrollGo = (element, to, duration) => {
    var start = element.scrollTop,
      change = to - start,
      currentTime = 0,
      increment = 20;

    var animateScroll = function () {
      currentTime += increment;
      var val = easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };
    animateScroll();
  };
  var onClickSections = {};

  const { dropdownHoverColor } = props;
  const classes = useStyles();
  return (
    <>
      <List className={classes.list + " " + classes.mlAuto}>
      <ListItem className={classes.listItem}>
        <Button color="transparent" href="/shop" className={classes.navLink}>
          <strong>Shop</strong>
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button color="transparent" href="/info" className={classes.navLink}>
          <strong>INFO</strong>
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
          {cart.data && cart.loading ? (
            <>
              <Button simple color={"secondary"} className={classes.navLink}>
                <ShoppingCartSharp/>  
              </Button>
            </>
          ) : cart.data !== undefined ? (
            <Button simple color={"secondary"} href='/cart' className={classes.navLink}>

              <Badge badgeContent={cart.data.total_items} color="secondary">
                <ShoppingCartSharp/>  
              </Badge>
            </Button>
          ) : (
            <>
            <Button simple color={"secondary"} className={classes.navLink}>
            <ShoppingCartSharp/>  
            </Button>          </>
              )}
      </ListItem>
      </List>
    </>

  );
}

HeaderLinks.defaultProps = {
  hoverColor: "primary"
};

HeaderLinks.propTypes = {
  dropdownHoverColor: PropTypes.oneOf([
    "dark",
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose"
  ])
};
