import { Box, Button, Typography } from '@material-ui/core';
import Link from 'next/link';
import Card from './Card/Card';

const OrderSummary = ({ subtotal, checkoutURL }) => {
  return (
    <Card raised="true"  style={{padding:"6%", color: "white", background:"#262626" }}>
    <Box display="flex" flexDirection="column" alignItems="flex-end">
      <Box display="flex" justifyContent="space-between" width="100%" mb={1}>
        <Typography variant="h6">Subotal:</Typography>
        <Typography variant="h6">{subtotal}</Typography>
      </Box>
      <Box display="flex" justifyContent="space-between" width="100%" mb={1}>
        <Link href={checkoutURL}>
            <Button
            type="button"
            fullWidth
            variant="contained"
            color="secondary"
            // onClick={proccessToCheckoutHandler}
            >
            Proceed to checkout
            </Button>
        </Link>      
        </Box>
    </Box>
    </Card>
  );
};

export default OrderSummary;
