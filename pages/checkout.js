import React
// { useEffect, useState } 
from 'react';
// import Link from 'next/link';
// import {
//   Box,
//   Button,
//   Card,
//   CircularProgress,
//   FormControl,
//   Grid,
//   InputLabel,
//   LinearProgress,
//   List,
//   ListItem,
//   MenuItem,
//   Select,
//   Slide,
//   Step,
//   StepLabel,
//   Stepper,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   TextField,
//   Typography,
// } from '@material-ui/core';
// import classNames from "classnames";
import dynamic from 'next/dynamic';
// import { Alert } from '@material-ui/lab';
// import Layout from '/components/Layout';
// import { commerce } from '/utils/commerce';
// import { useStyles } from '/utils/styles';
// import { useContext } from 'react';
// import { Store } from '/components/Store';
// import { CART_RETRIEVE_SUCCESS, ORDER_SET } from '/utils/constants';
// import Router from 'next/router';


// const dev = process.env.NODE_ENV === 'development';
function Checkout(props) {
  // const classes = useStyles();
  // const { state, dispatch } = useContext(Store);
  // const { cart } = state;

  // useEffect(() => {
  //   if (!cart.loading) {
  //     generateCheckoutToken();
  //   }
  // }, [cart.loading]);

  // const generateCheckoutToken = async () => {
  //   if (cart.data.line_items.length) {
  //     // const commerce = getCommerce(props.commercePublicKey);
  //     await commerce.checkout.generateToken(cart.data.id, {
  //       type: 'cart',
  //     }).then((resp) => {
  //       setCheckoutToken(resp);
  //       fetchShippingCountries(resp.id);
  //       setCheckoutToken(resp);
  //       fetchShippingCountries(resp.id);
  //     });
  //   } else {
  //     Router.push('/cart');
  //   }
  // };

  // // Customer details
  // const [firstName, setFirstName] = useState(dev ? 'Jane' : '');
  // const [lastName, setLastName] = useState(dev ? 'Doe' : '');
  // const [email, setEmail] = useState(dev ? 'janedoe@email.com' : '');

  // // Shipping details
  // const [shippingName, setShippingName] = useState(dev ? 'Jane Doe' : '');
  // const [shippingStreet, setShippingStreet] = useState(
  //   dev ? '123 Fake St' : ''
  // );
  // const [shippingPostalZipCode, setShippingPostalZipCode] = useState(
  //   dev ? '90089' : ''
  // );
  // const [shippingCity, setShippingCity] = useState(dev ? 'Los Angeles' : '');
  // const [shippingStateProvince, setShippingStateProvince] = useState(
  //   dev ? 'AR' : ''
  // );
  // const [shippingCountry, setShippingCountry] = useState(dev ? 'GB' : '');
  // const [shippingOption, setShippingOption] = useState({});
  // // Payment details
  // const [cardNum, setCardNum] = useState(dev ? '4242 4242 4242 4242' : '');
  // const [expMonth, setExpMonth] = useState(dev ? '11' : '');
  // const [expYear, setExpYear] = useState(dev ? '2023' : '');
  // const [cvv, setCvv] = useState(dev ? '123' : '');
  // const [billingPostalZipcode, setBillingPostalZipcode] = useState(
  //   dev ? '90089' : ''
  // );
  // // Shipping and fulfillment data
  // const [shippingCountries, setShippingCountries] = useState({});
  // const [shippingSubdivisions, setShippingSubdivisions] = useState({});
  // const [shippingOptions, setShippingOptions] = useState([]);

  // // Stepper
  // const [activeStep, setActiveStep] = React.useState(0);
  // const steps = [
  //   'Customer Info',
  //   'Shipping Details',
  //   'Payment Info',
  // ];

  // const handleCaptureCheckout = async () => {
  //   const orderData = {
  //     line_items: checkoutToken.line_items,
  //     customer: {
  //       firstname: firstName,
  //       lastname: lastName,
  //       email: email,
  //     },
  //     shipping: {
  //       name: shippingName,
  //       street: shippingStreet,
  //       town_city: shippingCity,
  //       county_state: shippingStateProvince,
  //       postal_zip_code: shippingPostalZipCode,
  //       country: shippingCountry,
  //     },
  //     fulfillment: {
  //       shipping_method: shippingOption,
  //     },
  //     payment: {
  //       gateway: 'test_gateway',
  //       card: {
  //         number: cardNum,
  //         expiry_month: expMonth,
  //         expiry_year: expYear,
  //         cvc: cvv,
  //         postal_zip_code: billingPostalZipcode,
  //       },
  //     },
  //   };
  //   // const commerce = getCommerce(props.commercePublicKey);
  //   try {
  //     await commerce.checkout.capture(
  //       checkoutToken.id,
  //       orderData
  //     ).then((resp) => { 
  //       dispatch({ type: ORDER_SET, payload: resp });
  //       localStorage.setItem('order_receipt', JSON.stringify(resp));});
  //     await refreshCart();
  //     Router.push('/confirmation');
  //   } catch (err) {
  //     const errList = [err.data.error.message];
  //     const errs = err.data.error.errors;
  //     for (const index in errs) {
  //       errList.push(`${index}: ${errs[index]}`);
  //     }
  //     setErrors(errList);
  //   }
  // };



  // const refreshCart = async () => {
  //   // const commerce = getCommerce(props.commercePublicKey);
  //   const newCart = await commerce.cart.refresh();
  //   dispatch({ type: CART_RETRIEVE_SUCCESS, payload: newCart });
  // };
  // const handleNext = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);

  //   if (activeStep === steps.length - 1) {
  //     <PreOrderConfirmation handleCaptureCheckout={handleCaptureCheckout} refreshCart={refreshCart}/>
  //     // handleCaptureCheckout();
  //   }
  // };

  // const [errors, setErrors] = useState([]);
  // const [checkoutToken, setCheckoutToken] = useState({});

  // const handleBack = () => {
  //   setErrors([]);
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };
  // const handleShippingCountryChange = (e) => {
  //   const currentValue = e.target.value;
  //   setShippingCountry(e.target.value);
  //   fetchSubdivisions(currentValue);
  // };

  // const fetchShippingCountries = async (checkoutTokenId) => {
  //   // const commerce = getCommerce(props.commercePublicKey);
  //   const countries = await commerce.services.localeListShippingCountries(
  //     checkoutTokenId
  //   );
  //   setShippingCountries(countries.countries);
  // };

  // const fetchSubdivisions = async (countryCode) => {
  //   // const commerce = getCommerce(props.commercePublicKey);
  //   const subdivisions = await commerce.services.localeListSubdivisions(
  //     countryCode
  //   );
  //   setShippingSubdivisions(subdivisions.subdivisions);
  // };
  // const handleSubdivisionChange = (e) => {
  //   const currentValue = e.target.value;
  //   setShippingStateProvince(currentValue);
  //   fetchShippingOptions(checkoutToken.id, shippingCountry, currentValue);
  // };
  // const handleShippingOptionChange = (e) => {
  //   const currentValue = e.target.value;
  //   setShippingOption(currentValue);

  // };
  // const fetchShippingOptions = async (
  //   checkoutTokenId,
  //   country,
  //   stateProvince = null
  // ) => {

  //   const options = await commerce.checkout.getShippingOptions(
  //     checkoutTokenId,
  //     {
  //       country: country,
  //       region: stateProvince,
  //     }
  //   );
  //   setShippingOptions(options);
  //   const shippingOption = options[0] ? options[0].id : null;
  //   setShippingOption(shippingOption);
  // };

  // const getStepContent = (step) => {
  //   switch (step) {
  //     case 0:
  //       return (
  //         <>
  //           <TextField
  //             variant="outlined"
  //             margin="normal"
  //             required
  //             fullWidth
  //             id="firstName"
  //             label="First Name"
  //             name="firstName"
  //             value={firstName}
  //             onChange={(e) => setFirstName(e.target.value)}
  //           />
  //           <TextField
  //             variant="outlined"
  //             margin="normal"
  //             required
  //             fullWidth
  //             id="lastName"
  //             label="Last Name"
  //             name="lastName"
  //             value={lastName}
  //             onChange={(e) => setLastName(e.target.value)}
  //           />
  //           <TextField
  //             variant="outlined"
  //             margin="normal"
  //             required
  //             fullWidth
  //             id="email"
  //             label="Email"
  //             name="email"
  //             value={email}
  //             onChange={(e) => setEmail(e.target.value)}
  //           />
  //         </>
  //       );
  //     case 1:
  //       return (
  //         <>
  //           <TextField
  //             variant="outlined"
  //             margin="normal"
  //             required
  //             fullWidth
  //             id="shippingName"
  //             label="Full Name"
  //             name="name"
  //             value={shippingName}
  //             onChange={(e) => setShippingName(e.target.value)}
  //           />
  //           <TextField
  //             variant="outlined"
  //             margin="normal"
  //             required
  //             fullWidth
  //             id="shippingStreet"
  //             label="Street"
  //             name="address"
  //             value={shippingStreet}
  //             onChange={(e) => setShippingStreet(e.target.value)}
  //           />
  //           <TextField
  //             variant="outlined"
  //             margin="normal"
  //             required
  //             fullWidth
  //             id="shippingCity"
  //             label="City"
  //             name="city"
  //             value={shippingCity}
  //             onChange={(e) => setShippingCity(e.target.value)}
  //           />
  //           <TextField
  //             variant="outlined"
  //             margin="normal"
  //             required
  //             fullWidth
  //             id="shippingPostalZipCode"
  //             label="Postal/Zip Code"
  //             name="postalCode"
  //             value={shippingPostalZipCode}
  //             onChange={(e) => setShippingPostalZipCode(e.target.value)}
  //           />
  //           <FormControl className={classes.formControl}>
  //             <InputLabel id="shippingCountry-label">Country</InputLabel>
  //             <Select
  //               labelId="shippingCountry-label"
  //               id="shippingCountry"
  //               label="Country"
  //               fullWidth
  //               onChange={handleShippingCountryChange}
  //               value={shippingCountry}
  //             >
  //               {Object.keys(shippingCountries).map((index) => (
  //                 <MenuItem value={index} key={index}>
  //                   {shippingCountries[index]}
  //                 </MenuItem>
  //               ))}
  //             </Select>
  //           </FormControl>
  //           <FormControl className={classes.formControl}>
  //             <InputLabel id="shippingStateProvince-label">
  //               State / Province
  //             </InputLabel>

  //             <Select
  //               labelId="shippingStateProvince-label"
  //               id="shippingStateProvince"
  //               label="State/Province"
  //               fullWidth
  //               onChange={handleSubdivisionChange}
  //               value={shippingStateProvince}
  //               required
  //               className={classes.mt1}
  //             >
  //               {Object.keys(shippingSubdivisions).map((index) => (
  //                 <MenuItem value={index} key={index}>
  //                   {shippingSubdivisions[index]}
  //                 </MenuItem>
  //               ))}
  //             </Select>
  //           </FormControl>
  //           <FormControl className={classes.formControl}>
  //             <InputLabel id="shippingOption-label">Shipping Option</InputLabel>

  //             <Select
  //               labelId="shippingOption-label"
  //               id="shippingOption"
  //               label="Shipping Option"
  //               fullWidth
  //               onChange={handleShippingOptionChange}
  //               value={shippingOption}
  //               required
  //               className={classes.mt1}
  //             >
  //               {shippingOptions.map((method, index) => (
  //                 <MenuItem
  //                   value={method.id}
  //                   key={index}
  //                 >{`${method.description} - $${method.price.formatted_with_code}`}</MenuItem>
  //               ))}
  //             </Select>
  //           </FormControl>
  //         </>
  //       );
  //     case 2:
  //       return (
  //         <>
  //           <TextField
  //             variant="outlined"
  //             margin="normal"
  //             required
  //             fullWidth
  //             id="cardNum"
  //             label="Card Number"
  //             name="cardNum"
  //             value={cardNum}
  //             onChange={(e) => setCardNum(e.target.value)}
  //           />
  //           <TextField
  //             variant="outlined"
  //             margin="normal"
  //             required
  //             fullWidth
  //             id="expMonth"
  //             label="Expiry Month"
  //             name="expMonth"
  //             value={expMonth}
  //             onChange={(e) => setExpMonth(e.target.value)}
  //           />
  //           <TextField
  //             variant="outlined"
  //             margin="normal"
  //             required
  //             fullWidth
  //             id="expYear"
  //             label="Expiry Year"
  //             name="expYear"
  //             value={expYear}
  //             onChange={(e) => setExpYear(e.target.value)}
  //           />
  //           <TextField
  //             variant="outlined"
  //             margin="normal"
  //             required
  //             fullWidth
  //             id="cvv"
  //             label="CVV"
  //             name="cvv"
  //             value={cvv}
  //             onChange={(e) => setCvv(e.target.value)}
  //           />
  //           <TextField
  //             variant="outlined"
  //             margin="normal"
  //             required
  //             fullWidth
  //             id="billingPostalZipcode"
  //             label="Postal/Zip Code"
  //             name="postalCode"
  //             value={billingPostalZipcode}
  //             onChange={(e) => setBillingPostalZipcode(e.target.value)}
  //           />
  //         </>
  //       );
  //     default:
  //       return 'Unknown step';
  //   }
  // };

  return (
    <></>
    // <Layout title="Home" commercePublicKey={props.commercePublicKey}>
    //   {cart.loading ? (
    //     <LinearProgress />
    //   ) : (
    //     <div className={classNames(classes.main, classes.mainRaised)}>
    //         <Grid container spacing={2}>
    //       <Slide direction="up" in={true}>
    //           <Grid item md={8}>
    //             <Typography variant="h2" component="h2" style={{ color: "white"}}>
    //               Checkout
    //             </Typography>
    //             <Card className={classes.p1}>
    //               <form>
    //                 <Stepper activeStep={activeStep} alternativeLabel>
    //                   {steps.map((label) => (
    //                     <Step key={label}>
    //                       <StepLabel>{label}</StepLabel>
    //                     </Step>
    //                   ))}
    //                 </Stepper>
    //                 <Box>
    //                   {activeStep === steps.length ? (
    //                     errors && errors.length > 0 ? (
    //                       <Box>
    //                         <List>
    //                           {errors.map((error) => (
    //                             <ListItem key={error}>
    //                               <Alert severity="error">{error}</Alert>
    //                             </ListItem>
    //                           ))}
    //                         </List>
    //                         <Box className={classes.mt1}>
    //                           <Button
    //                             onClick={handleBack}
    //                             className={classes.button}
    //                           >
    //                             Back
    //                           </Button>
    //                         </Box>
    //                       </Box>
    //                     ) : (
    //                       <Box>
    //                         <CircularProgress />
    //                         <Typography className={classes.instructions}>
    //                           Confirming Order...
    //                         </Typography>
    //                       </Box>
    //                     )
    //                   ) : 
    //                   (
    //                     <Box>
    //                       {getStepContent(activeStep)}
    //                       <Box className={classes.mt1}>
    //                       <Button
    //                           variant="contained"
    //                           color="secondary"
    //                           onClick={handleNext}
    //                           className={classes.button}
    //                           fullWidth
    //                         >
    //                           {activeStep === steps.length - 1
    //                             ? 'Confirm Order'
    //                             : 'Next'}
    //                         </Button>
    //                         <Button
    //                           disabled={activeStep === 0}
    //                           onClick={handleBack}
    //                           className={classes.button}
    //                           style={{color: "black"}}
    //                           fullWidth
    //                         >
    //                           Back
    //                         </Button>

    //                       </Box>
    //                     </Box>
    //                   )}
    //                 </Box>
    //               </form>
    //             </Card>
    //           </Grid>
    //           </Slide>
    //           <Slide direction="up" in={true}>
    //           <Grid item md={4}>
    //             <Typography variant="h2" component="h2" style={{ color: "white"}}>
    //               Order Summary
    //             </Typography>
    //             <Card className={classes.p1}>
    //               <List>
    //                 {cart.data.line_items.map((lineItem) => (
    //                   <ListItem key={lineItem.id}>
    //                     <Grid container>
    //                       <Grid xs={6} item>
    //                         {lineItem.quantity} x {lineItem.name}
    //                       </Grid>
    //                       <Grid xs={6} item>
    //                         <Typography align="right">
    //                           {lineItem.line_total.formatted_with_symbol}
    //                         </Typography>
    //                       </Grid>
    //                     </Grid>
    //                   </ListItem>
    //                 ))}
    //                 {/* <ListItem>
    //                   <Grid container>
    //                     <Grid item xs={6}>
    //                       <Typography>Tax</Typography>
    //                     </Grid>
    //                     <Grid item xs={6}>
    //                       <Typography align="right">
    //                         {order.order.tax.amount ? order.order.tax.amount.formatted : 'ORDERED'}
    //                       </Typography>
    //                     </Grid>
    //                   </Grid>
    //                 </ListItem> */}
    //                 <ListItem>
    //                   <Grid container >
    //                     <Grid lg={6} md={6} sm={12} xs={12} item>
    //                       Subtotal
    //                     </Grid>
    //                     <Grid lg={6} md={6} sm={12} xs={12} item>
    //                       <Typography align="right">
    //                         {cart.data.subtotal.formatted_with_symbol}
    //                       </Typography>
    //                     </Grid>
    //                   </Grid>
    //                 </ListItem>
    //               </List>
    //             </Card>
    //           </Grid>
    //           </Slide>
    //         </Grid>
    //     </div>
    //   )}
    // </Layout>
  );
}

export default dynamic(() => Promise.resolve(Checkout), {
  ssr: false,
});
