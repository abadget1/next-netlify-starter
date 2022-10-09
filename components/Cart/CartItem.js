// import { Button, ButtonBase, Card, CardMedia, CardActions, LinearProgress, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import  useStyles from './styles';
import {
  Row,
  Col,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
'components/CheckoutForm/Banner';



const CartItem = ({ product, onUpdateProduct }) => {
  
  const styles = useStyles();
  const handleUpdateCartQty = (lineItemId, newQuantity) => {
    onUpdateProduct(lineItemId, newQuantity);
  }

  // const handleRemoveFromCart  = e => {
  //   RemoveItemFromCart(product.id);
  // }  
  const getProductTotal = () => {
    return product.quantity * product.price.raw
  }

    return (
      <>
        <tr>
            <td>
            <div className="img-container">
                <img 
                style={{width:"120px" ,height:"auto"}}
                alt="..."
                src={product.image.url}
                />
            </div>
            </td>
            <td className="td-product text-left" style={{ paddingLeft: "5% "}}>
            <Col style={{padding: "10%"}}>
            <Row>
            <h5 ><strong>{product.name}</strong></h5>
            </Row>
            <Row>
            <p>color: {product.variant}</p>
            </Row>
            </Col>
            </td>
            <td className="td-price text-left" style={{fontSize: "18px"}}>
              <Col>
            <h6>{product.price.formatted_with_symbol}</h6>
              </Col>
            </td>
            <td className="td-number td-quantity" style={{ }}>
              <UncontrolledButtonDropdown>
              <DropdownToggle
              caret
              color="dark"
              outline          
              >
                {product.quantity}
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                  1
                </DropdownItem>
                <DropdownItem>
                  2
                </DropdownItem>
                <DropdownItem>
                  3
                </DropdownItem>
                <DropdownItem>
                  4
                </DropdownItem>
              </DropdownMenu>
              </UncontrolledButtonDropdown>
            {/* <FormControl sx={{ m: 1 }} variant="standard">
            <InputLabel id="demo-customized-select-label" style={{color: "white"}}>QUANTITY</InputLabel>
            <Select
              labelId="demo-customized-select-label"
              id="demo-customized-select"
              value={product.quantity}
              onChange={handleUpdateCartQty}
              input={<BootstrapInput />}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
            </Select>
            </FormControl> */}

            </td>
            <td className="td-price text-center" style={{fontSize: "18px"}}>
              <Col>
              <h6>
                ${getProductTotal()}
              </h6>
              </Col>
            </td>
        </tr>
      </>
    )
};

export default CartItem;